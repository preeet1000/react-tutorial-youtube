import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "./appSlice";
import { Mock_Video_Data } from "./Constants";
import CommentContainer from "./CommentContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  const id = searchParams.get("v");
  const videoData = Mock_Video_Data.filter(
    (videoData) => videoData.id === id
  )[0];
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-5 flex flex-col">
      <div className="">
        <iframe
          width="1200"
          height="400"
          src={videoData?.videoUrl}
          title={videoData?.title}
          allowFullScreen
        ></iframe>
      </div>
      <div className="m-5">
        <CommentContainer />
      </div>
    </div>
  );
};

export default Watch;
