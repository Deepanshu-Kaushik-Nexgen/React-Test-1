import React, { useCallback, useEffect, useState } from 'react'
import './style.scss'
import ReactPlayer from 'react-player'
import data from '../../Assets/Data/data.json'
import netflixImage from '../../Assets/Images/Netflix.webp';
import youtubeImage from '../../Assets/Images/Youtube.webp';
import rokuImage from '../../Assets/Images/Roku.png';
import crackleImage from '../../Assets/Images/Crackle.webp';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';

export const Tiles = ({item,index,setVideoUrl, onFocus })=>{
    const { ref, focused,focusSelf } = useFocusable({
        onFocus:onFocus,
        onEnterPress: () => setVideoUrl(item.Link),
    });
    console.log(item.Link, "Play Video")
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
    useEffect(()=>{ if(index==0){focusSelf()} },[])
    return <div className={focused ? 'tile-focused' : 'tile'} key={index} ref={ref} >
    <img src={imageFunc(item.Image)} onClick={() => setVideoUrl(item.Link)} alt="" />
</div>
}

const Index = () => {
    const { ref,focusKey } = useFocusable({
        isFocusBoundary:true
    });
    const [videoUrl, setVideoUrl] = useState('https://test-streams.mux.dev/x36xhzz/url_6/193039199_mp4_h264_aac_hq_7.m3u8')
    const scrollHandler = () => {
    };
    const onRowFocus = useCallback(
        ({ x }) => {
          ref.current.scrollTo({
            top: x,
            behavior: 'smooth'
          });
        },
        [ref]
      );

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
                <FocusContext.Provider value={focusKey} >
                <div className="tiles" ref={ref}  >
                    {data.map((item, index) => {
                        return <Tiles item={item} index={index} setVideoUrl={setVideoUrl} onFocus={onRowFocus} />
                    })}
                </div>
                </FocusContext.Provider>
            </div>
        </>
    )
}

export default Index