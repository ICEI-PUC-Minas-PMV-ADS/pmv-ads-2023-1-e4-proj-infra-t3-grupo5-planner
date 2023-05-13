import React from 'react'
import MoodStyled from './Mood.styled'
import Happy from '../../assets/Moods/Happy'
import InLove from '../../assets/Moods/InLove'
import Angry from '../../assets/Moods/Angry'
import Playful from '../../assets/Moods/Playful'
import Sad from '../../assets/Moods/Sad'
import Worried from '../../assets/Moods/Worried'

const Mood = ({ id, mood, isSelected }) => {
    return (
        <MoodStyled className={`${id}`} id={`${id}`} isSelected={isSelected}>{
            (mood === "angry" && <Angry className={id}  />) || 
            (mood === "sad" && <Sad />) || 
            (mood === "happy" && <Happy />) ||
            (mood === "playful" && <Playful />) ||
            (mood === "worried" && <Worried />) ||
            (mood === "inLove" && <InLove />)
            }</MoodStyled>
    )
}

export default Mood