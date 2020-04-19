import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { deleteComment } from '../../actions/post'


const CommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth
}) =>
    <div class="post bg-white p-1 my-1">
        <div>
            <Link to={`/profile/${user}`}>
                <img
                    class="round-img"
                    src={avatar}
                    alt=""
                />
                <h4>{name}</h4>
            </Link>
        </div>
        <div>
            <p class="my-1">
                {text}
            </p>
            <p class="post-date">
                <Moment format='DD/MM/YYYY' >{date}</Moment>
            </p>
        </div>
    </div>

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    auth: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(CommentItem)
