import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';


const Profile = props => {
    return (
        <div>
            Profile
        </div>
    )
}

Profile.propTypes = {

}

const mapStateToProps = state => {
    profile: state.profile,

}

export default connect(mapStateToProps)(Profile)
