import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const CommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date }
}) => {
    return (
        <div>

        </div>
    )
}

CommentItem.propTypes = {

}


mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(CommentItem)
