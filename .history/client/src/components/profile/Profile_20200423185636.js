import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileYoutube from './ProfileYoutube'



const Profile = ({ getProfileById, profile: { profile, loading }, auth, match }) => {
    /*
     use a nullProfile boolean to safely add to useEffect
     adding profile to useEffect would trigger the function
     as profile is an object and object's are reference types
  */
    const nullProfile = !profile;
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id, nullProfile]);


    return <Fragment>
        {profile === null || loading ? <Spinner /> : <Fragment>
            <Link to='/profiles' className='btn btn-light'>Go Back</Link>
            {auth.isAuthenticated &&
                auth.loading === false
                && auth.user._id === profile.user._id && (
                    <Link to='/edit-profile' className='btn btn-dark'>
                        Edit Profile
                    </Link>
                )}
            <div className='profile-grid my-1'>
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
                <div className='profile-exp bg-white p-2'>
                    <div className='text-primary'>Experience</div>
                    {profile.experience.length > 0 ? (
                        <Fragment>
                            {profile.experience.map(experience => (
                                <ProfileExperience key={experience._id} experience={experience} />
                            ))}
                        </Fragment>) : (<h4>No Experience added </h4>)}
                </div>
                <div className='profile-edu bg-white p-2'>
                    <div className='text-primary'>Education</div>
                    {profile.education.length > 0 ? (
                        <Fragment>
                            {profile.education.map(education => (
                                <ProfileEducation key={education._id} education={education} />
                            ))}
                        </Fragment>) : (<h4>No Education added </h4>)}
                </div>

                <Fragment>
                    <ProfileYoutube />
                </Fragment>

            </div>
        </Fragment>
        }
    </Fragment>
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile)
