import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


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
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                />
                <h4>John Doe</h4>
            </Link>
        </div>
        <div>
            <p class="my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                possimus corporis sunt necessitatibus! Minus nesciunt soluta
                suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
                dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
            <p class="post-date">
                Posted on 04/16/2019
            </p>
        </div>
    </div >

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    auth: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(CommentItem)
