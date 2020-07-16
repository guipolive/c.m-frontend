import React, { Component } from 'react';
import {Link, useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

import './styles.css';

// #share link
// https://youtu.be/_nBlN9yp9R8
// # url link
// https://www.youtube.com/watch?v=_nBlN9yp9R8

export default class Index extends Component {
    
    state = {
        // videoId: '_nBlN9yp9R8',
        videoId: '',
    }

    loadInfo(){
        this.setState({videoId: this.props.match.params.music});
    }

    componentDidMount(){
        this.loadInfo();
    }

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
        console.log(event.target);
        const videoDur = event.target.getDuration();
        console.log(videoDur);
    }

    render(props) {

        const {videoId} = this.state;

        const opts = {
            // não precisamos colocar propriedades de tamanho porque fazemos isso com css, mas é possível.
            // de qualquer forma, o css obrepõe essas propriedades
            height: '30',
            width: '30',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

    return (
        <div className="app">


        <div className="video-box">
            <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} className="video" ></YouTube>
        </div>

        </div>
      );
    }
   
}