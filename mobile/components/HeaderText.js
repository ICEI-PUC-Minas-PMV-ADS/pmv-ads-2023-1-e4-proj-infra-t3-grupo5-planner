import React from 'react';
import { SafeAreaView, View, TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import AppText from './AppText';
import {sizing} from '../styles/sizing';

const HeaderText = ({screenName}) => {
	console.log(screenName);
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Octicons name="arrow-left" size={30} color='black' />
				</TouchableOpacity>
				<View style={styles.headerTextContainer}>
					<AppText type='SmallTextBold' color='black'>{screenName}</AppText>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: sizing.s,
		paddingHorizontal: sizing.m,
		backgroundColor: '#F2F2F2',
		alignItems: 'center',
		flexDirection: 'row'
	},
	headerTextContainer: {
		flex: 1,
		alignItems: 'center',
	}
});

export default HeaderText;