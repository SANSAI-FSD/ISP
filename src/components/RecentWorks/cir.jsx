import CircularGallery from './CircularGallery';
import videoSrc from '../../assets/videos/BEAT.mp4';

import React from 'react'

const RecentWorks = () => {
  return (
    <div>
      <h1>My Gallery Page</h1>
      <CircularGallery 
  items={[
    { media: videoSrc, text: "Video 1",width: 700, height: 1000 },
    { media: videoSrc, text: "Video 2" },
    { media: videoSrc, text: "Video 3" },
    { media: videoSrc, text: "Video 4" },
    { media: videoSrc, text: "Video 5" },
    { media: videoSrc, text: "Video 6" },
  ]} 
/>
    </div>
  )
}

export default RecentWorks
