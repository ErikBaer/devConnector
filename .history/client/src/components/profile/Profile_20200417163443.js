import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';


const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match
}) => {
    /*
       use a nullProfile boolean to safely add to useEffect
       adding profile to useEffect would trigger the function
       as profile is an object and object's are reference types
    */
    const nullProfile = !profile;

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id, nullProfile])
    return (
        <div>
            Profile
        </div>
    )
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

export default connect(mapStateToProps)(Profile)
