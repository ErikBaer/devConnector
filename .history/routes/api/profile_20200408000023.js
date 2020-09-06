const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const normalize = require('normalize-url');
const { check, validationResult } = require('express-validator');

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
      website:
        website === ''
          ? ''
          : normalize(website, {
              forceHttps: true,
            }),
      bio,
      skills: Array.isArray(skills)
        ? skills
        : skills.split(',').map((skill) => ' ' + skill.trim()),
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

    console.log(profileFields);

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        {
          user: req.user.id,
        },
        {
          $set: profileFields,
        },
        {
          new: true,
          upsert: true,
        }
      );
      res.json(profile);
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

module.exports = router;
