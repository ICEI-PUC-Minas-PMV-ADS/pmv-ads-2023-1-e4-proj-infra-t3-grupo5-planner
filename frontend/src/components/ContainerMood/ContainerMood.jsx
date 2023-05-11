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
      onClick={() => console.log('Mood')}
      content={
        <>
        <div onClick={() => handleIconClick("sad")}>
            <Mood
              id="small-mood"
              mood="sad"
              isSelected={selectedIcon === "sad"}
              disabled={selectedIcon !== "sad"}
            />
        </div>
        <div onClick={() => handleIconClick("happy")}>
          <Mood
            id="small-mood"
            mood="happy"
            isSelected={selectedIcon === "happy"}
            disabled={selectedIcon !== "happy"}
          />
          </div>
          <div onClick={() => handleIconClick("inlove")}>
            <Mood
              id="small-mood"
              mood="inLove"
              isSelected={selectedIcon === "inlove"}
            />
          </div>
          <div onClick={() => handleIconClick("playful")}>
            <Mood
              id="small-mood"
              mood="playful"
              isSelected={selectedIcon === "playful"}
            />
          </div>
          <div onClick={() => handleIconClick("worried")}>
            <Mood
              id="small-mood"
              mood="worried"
              isSelected={selectedIcon === "worried"}
            />
          </div>
        </>
      }
    />
  );
};

export default ContainerMood;



