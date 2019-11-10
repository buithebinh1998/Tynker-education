import React from 'react'
import YouTube from 'react-youtube'
import './VideoCourse.scss'

const videoIdA = 'nzNPjDjORDU'
class VideoCourse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: videoIdA,
      player: null
    }
  }

  onReady = event => {
    this.setState({
      player: event.target
    })
  }

  // onPlayVideo = () => {
  //   this.state.player.playVideo()
  // }

  // onPauseVideo = () => {
  //   this.state.player.pauseVideo()
  // }

  render() {
    const opts = {
      playerVars: {
        autoplay: 1
      }
    }
    return (
      <div className="video-background">
        <YouTube
          opts={opts}
          // eslint-disable-next-line react/destructuring-assignment
          videoId={this.state.videoId}
          onReady={this.onReady}
        />
      </div>
    )
  }
}
export default VideoCourse
