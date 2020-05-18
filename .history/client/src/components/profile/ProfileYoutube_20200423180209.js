import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getYoutubeData } from '../../actions/youtube';

const ProfileYoutube = ({ getYoutubeData, channels }) => {

    useEffect(() => {
        getYoutubeData()
    }, [getYoutubeData])

    return <div className=''>
        <h2 className='text-primary my-1'>Youtube</h2>
        <h3>{channels.general.title}</h3>
        {channels.map(channel => (
            <div key={channel.general.id} className='br-white p-1 my-1'>
                <h3>{channel.general.title}</h3>
            </div>
        ))}
    </div>

}

ProfileYoutube.propTypes = {
    getYoutubeData: PropTypes.func.isRequired,
    channels: PropTypes.array.isRequired,
    // username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    channels: state.profile.repos
})

export default connect(mapStateToProps, { getYoutubeData })(ProfileYoutube)