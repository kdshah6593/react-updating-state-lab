// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor(props) {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }
    
    handleBitrateChange = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
    }

    handleResolutionChange = () => {
        this.setState({
            settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleBitrateChange} type="button" className='bitrate'>{this.state.settings.bitrate}</button>
                <button onClick={this.handleResolutionChange} type="button" className='resolution'>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger