import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';

const ProfileExperience = ({ experience: { company, title, location, current, to, from, description } }) =>
    <div>
        <h3></h3>
    </div>



ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired,

}

export default ProfileExperience
