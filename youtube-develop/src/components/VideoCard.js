import React from "react";

const VideoCard = ({ videoInfo }) => {
  return (
    <div className="">
      <div className=" w-60 h-70 m-3 shadow-md">
        <img src={videoInfo.thumbnailUrl} alt={videoInfo.title} />
        <h3 className=" font-bold py-2 px-2">{videoInfo.title}</h3>
        <h3 className="py-2 px-2">{videoInfo.author}</h3>
        <h3 className="py-2 px-2">{videoInfo.views} views</h3>
        {/* Add other relevant information */}
      </div>
    </div>
  );
};

export default VideoCard;
