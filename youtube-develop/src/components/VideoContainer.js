import React, { useEffect, useState } from "react";
import { Mock_Video_Data, YOUTUBE_VIDEO_API } from "./Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(Mock_Video_Data);

  //   const getYoutubeVideos = async () => {
  //     const data = await fetch(YOUTUBE_VIDEO_API);
  //     const json = await data.json();

  //     setVideos(Mock_Video_Data);
  //     console.log(videos);
  //   };

  // const getYoutubeVideos = () => {

  //     setVideos(Mock_Video_Data);
  //     console.log(videos);
  //     console.log(Mock_Video_Data);
  //   };
  //   useEffect(() => {
  //     getYoutubeVideos();
  //   }, []);

  return (
    <div className="flex flex-wrap px-3 p-3 m-2">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard videoInfo={video} key={video.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
