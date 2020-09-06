import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinnner from '../layout/Spinner'
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
    return (
        <div>

        </div>
    )
}

ProfileGithub.propTypes = {

}

const mapStateToProps

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)
