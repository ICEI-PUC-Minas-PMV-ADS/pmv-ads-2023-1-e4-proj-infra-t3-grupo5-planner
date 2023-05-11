import React, { useState } from "react";
import Box from '../Box/Box'
import Mood from '../Mood/Mood'

const ContainerMood = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <Box
      id="MoodsBox"
      content={
        <>
          <Mood
            id="small-mood"
            mood="sad"
            isSelected={selectedIcon === "sad"}
            onClick={() => handleIconClick("sad")}
            disabled={selectedIcon && selectedIcon !== "sad"}
          />
          <Mood
            id="small-mood"
            mood="happy"
            isSelected={selectedIcon === "happy"}
            onClick={() => handleIconClick("happy")}
            disabled={selectedIcon && selectedIcon !== "happy"}
          />
          <Mood
            id="small-mood"
            mood="inLove"
            isSelected={selectedIcon === "inlove"}
            onClick={() => handleIconClick("inlove")}
            disabled={selectedIcon && selectedIcon !== "inlove"}
          />
          <Mood
            id="small-mood"
            mood="playful"
            isSelected={selectedIcon === "playful"}
            onClick={() => handleIconClick("playful")}
            disabled={selectedIcon && selectedIcon !== "playful"}
          />
          <Mood
            id="small-mood"
            mood="worried"
            isSelected={selectedIcon === "worried"}
            onClick={() => handleIconClick("worried")}
            disabled={selectedIcon && selectedIcon !== "worried"}
          />
        </>
      }
    />
  );
};

export default ContainerMood;



