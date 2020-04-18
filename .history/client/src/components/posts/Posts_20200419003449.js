import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { getPosts } from '../../actions/post'

const Posts = ({ getPosts, post: { posts, loading } }) => {

    useEffect(() => )

    return (
        <div>

        </div>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getProps })(Posts)
