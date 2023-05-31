import React from 'react';
import { StyleSheet, View } from 'react-native';
import Angry from '../assets/Moods/Angry'
import Happy from '../assets/Moods/Happy'
import InLove from '../assets/Moods/InLove'
import Playful from '../assets/Moods/Playful'
import Sad from '../assets/Moods/Sad'
import Worried from '../assets/Moods/Worried'


const Mood = ({
    size,
    mood
}) => {

    const getMoodSize = () => {
        switch (size){
          case 's':
            return styles.smallMood;
          case 'm':
            return styles.mediumMood;
          case 'l':
                return styles.largeMood;
          default:
            return styles.smallMood;
        }
      }

    return (
        <View style={getMoodSize()}>{
            (mood === "angry" && <Angry />) || 
            (mood === "sad" && <Sad />) || 
            (mood === "happy" && <Happy />) ||
            (mood === "playful" && <Playful />) ||
            (mood === "worried" && <Worried />) ||
            (mood === "inLove" && <InLove />)
        }</View>
    )
};

const styles = StyleSheet.create({
    // default: {
    //  flex: 1,
    //  flexDirection: 'row',
    //  justifyContent: 'center',
    //  //opacity: ${props => props.isSelected ? 1 : 0.6},
    // },
 
   smallMood: {
     width: 30,
     height: 30,
   },
 
   mediumMood: {
     width: 58,
     height: 58,
   },
 
   largeMood: {
     width: 80,
     height: 80,
   }
 })

export default Mood;