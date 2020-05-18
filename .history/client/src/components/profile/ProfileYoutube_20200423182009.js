import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getYoutubeData } from '../../actions/youtube';

const ProfileYoutube = ({ getYoutubeData, channels }) => {

    useEffect(() => {
        getYoutubeData()
    }, [getYoutubeData])

    console.log(channels)

    return <div className=''>
        <h2 className='text-primary my-1'>Youtube</h2>
        {channels.map(channel => (
            <div key={channel.title}>
                <div>
                    <h3>{channel.title}</h3>
                </div>

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
    channels: state.youtube.channels
})

export default connect(mapStateToProps, { getYoutubeData })(ProfileYoutube)
