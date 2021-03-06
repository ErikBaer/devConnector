import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'

const PostItem = ({ auth, post: { _id, text, name, avatar, user, likes, comments, date } }) => <div class="post bg-white p-1 my-1">
    <div>
        <a href="profile.html">
            <img
                class="round-img"
                src={avatar}
                alt=""
            />
            <h4>{name}</h4>
        </a>
    </div>
    <div>
        <p class="my-1">
            {text}
        </p>
        <p class="post-date">
            Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
        </p>
        <button type="button" class="btn btn-light">
            <i class="fas fa-thumbs-up"></i>
            <span>{likes.length}</span>
        </button>
        <button type="button" class="btn btn-light">
            <i class="fas fa-thumbs-down"></i>
        </button>
        <a href="post.html" class="btn btn-primary">
            Discussion <span class='comment-count'>{comments.length}</span>
        </a>
        {}
        <button
            type="button"
            class="btn btn-danger"
        >
            <i class="fas fa-times"></i>
        </button>
    </div>
</div>

PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, [])(PostItem)
