import React from 'react';
import { StyleSheet, View } from 'react-native';
import Checklist from '../assets/Widgets/Checklist';
import Finance from '../assets/Widgets/Finance';
import Goals from '../assets/Widgets/Goals';
import Habits from '../assets/Widgets/Habits';
import Notes from '../assets/Widgets/Notes';
import Reminders from '../assets/Widgets/Reminders';

const WidgetContent = ({
    checklist, finance, goals, habits, notes, reminders
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.redBox} />
            <View style={styles.greyBox}>{
                (checklist && <Checklist />) ||
                (finance && <Finance />) ||
                (goals && <Goals />) ||
                (habits && <Habits />) ||
                (notes && <Notes />) ||
                (reminders && <Reminders />)}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        width: 136,
        height: 128,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#000',
        position: 'relative',
        alignSelf: 'center',
        backgroundColor: '#F2F2F2',
    },

    redBox: {
        position: 'absolute',
        top: -2,
        left: -2,
        width: 136,
        height: 24,
        backgroundColor: '#ED4B58',
        borderWidth: 2,
        borderColor: '#000',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },

    greyBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WidgetContent;