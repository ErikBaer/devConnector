import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getPost } from '../../actions/post'

const Post = ({ getPost }) => {
    return (
        <div>

        </div>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { getPost })(Post)
