import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Checklist from '../assets/Widgets/Checklist';
import Finance from '../assets/Widgets/Finance';
import Goals from '../assets/Widgets/Goals';
import Habits from '../assets/Widgets/Habits';
import Notes from '../assets/Widgets/Notes';
import Reminders from '../assets/Widgets/Reminders';
import {sizing} from '../styles/sizing';
import {useNavigation} from '@react-navigation/native';

const WidgetContent = ({
    checklist, finance, goals, habits, notes, reminders
}) => {
    const navigation = useNavigation();
    const onWidgetPress = () => {
        if (checklist) {
            navigation.navigate('Checklist');
        }
        if (finance) {
            navigation.navigate('Expenses');
        }
        if (goals) {
            navigation.navigate('Goals');
        }
        if (habits) {
            navigation.navigate('Habits');
        }
        if (notes) {
            navigation.navigate('Notes');
        }
        if (reminders) {
            navigation.navigate('Reminder');
        }
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onWidgetPress}>
            <View style={[styles.box, styles.redBox]} />
            <View style={[styles.box, styles.greyBox]}>{
                (checklist && <Checklist />) ||
                (finance && <Finance />) ||
                (goals && <Goals />) ||
                (habits && <Habits />) ||
                (notes && <Notes />) ||
                (reminders && <Reminders />)}
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    box: {
        borderWidth: 2,
        borderColor: '#333333',
        borderRadius: sizing.m,
    },
    redBox: {
        height: 24,
        backgroundColor: '#ED4B58',
        borderBottomWidth: 0.1,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    greyBox: {
        height: 104,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    }
})

export default WidgetContent;