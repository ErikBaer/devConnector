import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';

const Profileeducation = ({ education: { school, degree, fieldofstudy, current, to, from, description } }) =>
    <div>
        <h3 className='text-dark'>{school}</h3>
        <p>
            <Moment format='DD/MM/YYYY'>{from}</Moment> -{!to ? ' Now' :
                <Moment format='DD/MM/YYYY'>{to}</Moment>}
        </p>
        <p>
            <strong>Position: </strong>{title}
        </p>
        <p>
            <strong>Description: </strong>{description}
        </p>
    </div>



ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired,

}

export default ProfileEducation
