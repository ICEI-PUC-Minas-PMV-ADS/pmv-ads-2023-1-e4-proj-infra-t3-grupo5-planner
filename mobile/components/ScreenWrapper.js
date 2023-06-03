import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const ScreenWrapper = props => {
    const customStyle = props.style ?? [];
    const ViewComponent = props.scroll ? ScrollView : View;
    return (
        <SafeAreaView style={{flex: 1}}>
            <ViewComponent style={[styles.screenContainer, customStyle]}>
                {props.children}
            </ViewComponent>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },
});

export default ScreenWrapper;