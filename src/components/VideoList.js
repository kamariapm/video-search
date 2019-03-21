import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  //destructure out props by taking 'props out from in between the equal signs and inserting the videos prop from App.js
  //return <div>{videos.length}</div>;
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
