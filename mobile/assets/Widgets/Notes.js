import React from 'react'
import { View } from 'react-native';
import Svg, { Path, Mask } from 'react-native-svg';

const Notes = () => {
    return (
        <View >
            <Svg width="136" height="128" viewBox="0 0 136 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0 24H136V112C136 120.837 128.837 128 120 128H16C7.16344 128 0 120.837 0 112V24Z" fill="#F2F2F2" />
                <Path d="M0 24H136H0ZM138 112C138 121.941 129.941 130 120 130H16C6.05887 130 -2 121.941 -2 112H2C2 119.732 8.26801 126 16 126H120C127.732 126 134 119.732 134 112H138ZM16 130C6.05887 130 -2 121.941 -2 112V24H2V112C2 119.732 8.26801 126 16 126V130ZM138 24V112C138 121.941 129.941 130 120 130V126C127.732 126 134 119.732 134 112V24H138Z" fill="black" mask="url(#path-1-inside-1_558_3279)" />
                <Path d="M43 106.667C41.6111 106.667 40.4306 106.181 39.4583 105.208C38.4861 104.236 38 103.056 38 101.667V51.6667C38 50.2778 38.4861 49.0972 39.4583 48.125C40.4306 47.1528 41.6111 46.6667 43 46.6667H60.0833C60.3611 44.7222 61.25 43.125 62.75 41.875C64.25 40.625 66 40 68 40C70 40 71.75 40.625 73.25 41.875C74.75 43.125 75.6389 44.7222 75.9167 46.6667H93C94.3889 46.6667 95.5694 47.1528 96.5417 48.125C97.5139 49.0972 98 50.2778 98 51.6667V101.667C98 103.056 97.5139 104.236 96.5417 105.208C95.5694 106.181 94.3889 106.667 93 106.667H43ZM68 50.25C68.7778 50.25 69.4583 49.9583 70.0417 49.375C70.625 48.7917 70.9167 48.1111 70.9167 47.3333C70.9167 46.5556 70.625 45.875 70.0417 45.2917C69.4583 44.7083 68.7778 44.4167 68 44.4167C67.2222 44.4167 66.5417 44.7083 65.9583 45.2917C65.375 45.875 65.0833 46.5556 65.0833 47.3333C65.0833 48.1111 65.375 48.7917 65.9583 49.375C66.5417 49.9583 67.2222 50.25 68 50.25ZM53.0833 92.5833H55.8333C56.1667 92.5833 56.4722 92.5278 56.75 92.4167C57.0278 92.3056 57.3056 92.1111 57.5833 91.8333L78.0833 71.3333L73.1667 66.25L52.5833 86.8333C52.3056 87.1111 52.1111 87.3889 52 87.6667C51.8889 87.9444 51.8333 88.25 51.8333 88.5833V91.3333C51.8333 91.6667 51.9583 91.9583 52.2083 92.2083C52.4583 92.4583 52.75 92.5833 53.0833 92.5833ZM79.5833 69.8333L82.8333 66.5833C83.2222 66.1944 83.4306 65.7639 83.4583 65.2917C83.4861 64.8194 83.2778 64.3611 82.8333 63.9167L80.4167 61.5833C79.9722 61.1389 79.5278 60.9306 79.0833 60.9583C78.6389 60.9861 78.2222 61.1944 77.8333 61.5833L74.6667 64.75L79.5833 69.8333Z" fill="#333333" />
            </Svg>
        </View>

    )
}

export default Notes