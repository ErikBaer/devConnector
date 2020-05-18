import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getYoutubeData } from '../../actions/profile';

const ProfileYoutube = ({ getYoutubeData, channels }) => {

    useEffect(() => {
        getYoutubeData
    }, [getYoutubeData, username])

    return <div className='profile-github'>
        <h2 className='text-primary my-1'>Youtube</h2>

    </div>
}

ProfileGithub.propTypes = {
    getYoutubeData: PropTypes.func.isRequired,
    channels: PropTypes.array.isRequired,
    // username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    channels: state.profile.repos
})

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)
