import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';

const ProfileExperience = ({ experience: { company, title, location, current, to, from, description } }) => {
    return (
        <div>

        </div>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired,

}

export default ProfileExperience
