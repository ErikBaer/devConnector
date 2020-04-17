import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinnner from '../layout/Spinner'
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {

    useEffect(() => {
        getGithubRepos(username)
    }, [getGithubRepos])

    return <div className='profile-github'>
        <h2 className='text-primary my-1'>Github Repos</h2>
        {repos === null ? <Spinner />}
    </div>
}

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)
