import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "./appSlice";
import { Mock_Video_Data } from "./Constants";

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
    <div className="p-5">
      
      <div className="">
        <iframe width="1200" height="600" src={videoData?.videoUrl} title={videoData?.title} allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Watch;
