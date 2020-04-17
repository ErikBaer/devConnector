import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';



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
                <ProfileTop />
            </div>
        </Fragment>}
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
