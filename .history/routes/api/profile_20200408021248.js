const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const normalize = require('normalize-url');
const reque
const {
    check,
    validationResult
} = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route    GET api/profile/me
//@desc     Get current users profile
//@access   Private

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id,
        }).populate('user', ['name', 'avatar']); //?

        if (!profile) {
            return res.status(400).json({
                msg: 'There is no profile for this user',
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    POST api/profile
//@desc     Create or Update current users profile
//@access   Private

router.post(
    '/',
    [
        auth,
        [
            check('status', 'Status is required').not().isEmpty(),
            check('skills', 'Skills is required').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const {
            company,
            location,
            website,
            bio,
            skills,
            status,
            githubusername,
            youtube,
            twitter,
            instagram,
            linkedin,
            facebook,
        } = req.body;

        //Build profile object

        const profileFields = {
            user: req.user.id,
            company,
            location,
            website: website === '' ?
                '' : normalize(website, {
                    forceHttps: true,
                }),
            bio,
            skills: Array.isArray(skills) ?
                skills : skills.split(',').map((skill) => ' ' + skill.trim()),
            status,
            githubusername,
        };

        const socialfields = {
            youtube,
            twitter,
            instagram,
            linkedin,
            facebook,
        };

        for (const [key, value] of Object.entries(socialfields)) {
            if (value.length > 0)
                socialfields[key] = normalize(value, {
                    forceHttps: true,
                });
        }
        profileFields.social = socialfields;



        try {
            // Using upsert option (creates new doc if no match is found):
            let profile = await Profile.findOneAndUpdate({
                user: req.user.id,
            }, {
                $set: profileFields,
            }, {
                new: true,
                upsert: true,
            });
            res.json('Profile created / updated');
            console.log('Profile created / updated')
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

//@route    Get api/profile
//@desc     Get all profiles
//@access   Public

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    Get api/profile/user/:user_id
//@desc     Get profile by user ID
//@access   Public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id,
        }).populate('user', ['name', 'avatar']);

        if (!profile)
            return res.status(400).json({
                msg: 'Profile not found',
            });

        res.json(profile);
    } catch (err) {
        console.log(err.name);
        if (err.name == 'CastError') {
            return res.status(400).json({
                msg: 'Profile not found',
            });
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    Delete api/profile/
//@desc     Delete profile, user and post
//@access   Private

router.delete('/', auth, async (req, res) => {
    try {
        //Remove profile
        //TODO: Remove Users Posts
        await Profile.findOneAndRemove({
            user: req.user.id
        });
        //Remove the User
        await User.findOneAndRemove({
            _id: req.user.id
        })

        res.json({
            msg: 'User Information deleted'
        });
        console.log('User Information deleted');
    } catch (err) {
        console.log(err.name);
        if (err.name == 'CastError') {
            return res.status(400).json({
                msg: 'Profile not found',
            });
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    Put api/profile/experience
//@desc     Add profile experience
//@access   Private

router.put('/experience', [auth,
        [
            check('title', 'Title is required')
            .not()
            .isEmpty(),

            check('company', 'Company name is required')
            .not()
            .isEmpty(),

            check('from', 'fromDate is required')
            .not()
            .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const {
            title,
            company,
            location,
            from,
            to,
            current,
            description
        } = req.body;

        const newExp = {
            title,
            company,
            location,
            from,
            to,
            current,
            description
        }

        try {
            const profile = await Profile.findOne({
                user: req.user.id
            });

            profile.experience.unshift(newExp);

            await profile.save();

            res.json(profile);
        } catch (err) {
            console.err(err.message)
            res.status(500).send('Server Error');
        }
    })

//@route    Delete api/profile/experience/:exp_id
//@desc     Delete experience from profile
//@access   Private

router.delete("/experience/:exp_id", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        });
        //Get remove index (check for position(index) where item.id === exp_id)
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);

        profile.experience.splice(removeIndex, 1);

        await profile.save();

        res.json(profile);
    } catch (err) {
        console.err(err.message)
        res.status(500).send('Server Error');
    }
});

//@route    Put api/profile/education
//@desc     Add profile education
//@access   Private

router.put('/education', [
        auth,
        [
            check('school', 'School is required')
            .not()
            .isEmpty(),

            check('degree', 'Degree is required')
            .not()
            .isEmpty(),

            // check('fieldofstudy', 'Field of study is required')
            // .not()
            // .isEmpty(),

            check('from', 'fromDate is required')
            .not()
            .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
        } = req.body;

        const newEdu = {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
        }

        try {
            const profile = await Profile.findOne({
                user: req.user.id
            });

            profile.education.unshift(newEdu);

            await profile.save();

            res.json(profile);
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error');
        }
    })

//@route    Delete api/profile/education/:edu_id
//@desc     Delete education from profile
//@access   Private

router.delete("/education/:edu_id", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        });
        //Get remove index (check for position(index) where item.id === edu_id)
        const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id);

        profile.education.splice(removeIndex, 1);

        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
})

//@route    Get api/profile/github/:username
//@desc     Get user repos from Github
//@access   Public

router.get('/github/:username', (req, res) => {
    try {
        const options = {
            uri:
        }
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
})



module.exports = router;