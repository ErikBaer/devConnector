import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import addPost from '../../actions/post'


const PostForm = ({ addPost }) => {
    return (
        <div>

        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(PostForm)
