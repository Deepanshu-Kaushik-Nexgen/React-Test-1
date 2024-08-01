import React, { useState } from 'react'
import './style.scss'
import ReactPlayer from 'react-player'
import data from '../../Assets/Data/data.json'
import netflixImage from '../../Assets/Images/Netflix.webp';
import youtubeImage from '../../Assets/Images/Youtube.webp';
import rokuImage from '../../Assets/Images/Roku.png';
import crackleImage from '../../Assets/Images/Crackle.webp';

const Index = () => {
    const [videoUrl, setVideoUrl] = useState('https://test-streams.mux.dev/x36xhzz/url_6/193039199_mp4_h264_aac_hq_7.m3u8')

    const imageFunc = (Image) => {
        switch (Image) {
            case "Netflix":
                return netflixImage
            case "Roku":
                return rokuImage
            case "Youtube":
                return youtubeImage
            case "Crackle":
                return crackleImage

            default:
                return '';
        }
    }

    const playVideo = (url) => {
        setVideoUrl(url);
    }

    return (
        <>
            <div className="mainContainer">
                <div className="playerContainer">
                    <ReactPlayer
                        url={videoUrl}
                        className='react-player'
                        width='100%'
                        height='77.8vh' 
                        playing
                        loop
                        controls
                        // volume
                        />
                </div>
                <div className="tiles">
                    {data.map((item, index) => {
                        return <div className="tile" key={index}>
                            <img src={imageFunc(item.Image)} onClick={() => playVideo(item.Link)} alt="" />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Index