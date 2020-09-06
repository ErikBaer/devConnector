import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const CommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth
}) => {
    return (
        <div>

        </div>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    auth: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
}


mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(CommentItem)
