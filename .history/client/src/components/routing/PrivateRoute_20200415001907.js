import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <div>

        </div>
    )
}

PrivateRoute.propTypes = {

}

const mapStateToProps = state => ({
    suth
})

export default connect()(PrivateRoute)
