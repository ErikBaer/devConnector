import React, { useEffect, Fragment } from 'react'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';





const Dashboard = ({ getCurrentProfile, auth, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return loading && profile === null ? <Spinner /> :
        <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Welcome {user && user.name}
            </p>
            {profile !== null ? (
                <Fragment>
                    <DashboardActions />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />

                    <div className='my-2'>
                        <button className='btn btn-danger' onClick={() => deleteAccount()}>
                            <i className='fas fa-user-minus' /> Delete My Account
          </button>
                    </div>
                </Fragment>
};

Dashboard.propTypes = {
                getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
                auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)
