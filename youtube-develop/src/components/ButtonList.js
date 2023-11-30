import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "Game",
    "Cooking",
    "Play",
    "Cricket",
    "Basketball",
    "Music",
    "Movie",
    "Football",
    "Chess",
    "Cooking",
    "Play",
    "Cricket",
    "Basketball",
    "Music",
  ];
  return (
    <div className=" w-4/5overflow-hidden">
      <div className="flex transition-transform m-0.5 ease-in-out">
        {buttonNames.map((item, index) => {
          return <Button name={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
