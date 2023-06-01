import React from 'react'
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Habits = () => {
    return (
        <View >
            <Svg width="136" height="128" viewBox="0 0 136 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0 24H136V112C136 120.837 128.837 128 120 128H16C7.16344 128 0 120.837 0 112V24Z" fill="#F2F2F2" />
                <Path d="M0 24H136H0ZM138 112C138 121.941 129.941 130 120 130H16C6.05887 130 -2 121.941 -2 112H2C2 119.732 8.26801 126 16 126H120C127.732 126 134 119.732 134 112H138ZM16 130C6.05887 130 -2 121.941 -2 112V24H2V112C2 119.732 8.26801 126 16 126V130ZM138 24V112C138 121.941 129.941 130 120 130V126C127.732 126 134 119.732 134 112V24H138Z" fill="black" mask="url(#path-1-inside-1_558_3273)" />
                <Path d="M47.5239 50.4L48.9946 64.4C51.6263 62.96 54.3488 61.8667 57.1621 61.12C59.9754 60.3733 62.8517 60 65.7909 60C67.339 60 68.8746 60.1067 70.3979 60.32C71.9212 60.5333 73.43 60.8533 74.9244 61.28C77.5045 62.0267 79.4788 62.5333 80.8472 62.8C82.2157 63.0667 83.673 63.2 85.2189 63.2H88.0828L89.3987 50.4H47.5239ZM53.0195 108C51.4198 108 50.0266 107.467 48.8398 106.4C47.6529 105.333 46.9821 103.973 46.8273 102.32L41.0221 47.52C40.9189 46.56 41.1769 45.7333 41.7961 45.04C42.4154 44.3467 43.1894 44 44.1182 44H92.8818C93.8106 44 94.5846 44.3467 95.2039 45.04C95.8231 45.7333 96.0811 46.56 95.9779 47.52L90.1727 102.32C90.0179 103.973 89.3471 105.333 88.1602 106.4C86.9734 107.467 85.5802 108 83.9805 108H53.0195Z" fill="#333333" />
            </Svg>
        </View>

    )
}

export default Habits