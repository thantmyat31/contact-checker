import React from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableWithoutFeedback, ScrollView } from 'react-native';

import Screen from './../components/Screen';
import HeaderBar from '../components/HeaderBar';

import colors from './../config/colors';

const ContactDetailsScreen = ({ route }) => {
	const { item } = route.params;

	const handleOnDelete = () => {
		Alert.alert('Are you sure ?', 'Do you really want to delete this email address ?', [
			{ text: 'NO', style: 'cancel' },
			{ text: 'OK', style: 'destructive', onPress: confirmDelete }
		]);
	};

	const confirmDelete = () => {
		console.log('deleted!!!');
	};

	return (
		<Screen style={styles.screen}>
			<HeaderBar />
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.imageWrapper}>
						<Image
							style={styles.image}
							source={
								!item.thumbnailPath ? (
									require('./../assets/image/icon.png')
								) : (
									{ uri: item.thumbnailPath }
								)
							}
						/>
					</View>
				</View>
				<View style={styles.container}>
					<Text style={styles.name}>{item.displayName}</Text>
				</View>
				<View style={styles.container}>
					{item.phoneNumbers.map((pn) => (
						<View style={[ styles.row, styles.list ]} key={pn.id}>
							<Text style={styles.label}>{pn.label.toUpperCase()}</Text>
							<Text style={styles.text}>{pn.number}</Text>
						</View>
					))}
				</View>
				<View style={styles.container}>
					{item.emailAddresses.map((m) => (
						<View style={[ styles.row, styles.emailWrapper ]} key={m.id}>
							<Text style={styles.email}>{m.email}</Text>
							<TouchableWithoutFeedback onPress={handleOnDelete}>
								<View style={styles.icon}>
									<Text style={styles.email}>&times;</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					))}
				</View>
			</ScrollView>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#fff'
	},
	imageWrapper: {
		width: 120,
		height: 120,
		borderRadius: 60,
		alignSelf: 'center',
		elevation: 10,
		backgroundColor: '#fff'
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 60
	},
	container: {
		paddingHorizontal: 20,
		marginVertical: 20
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10
	},
	list: {
		marginBottom: 15,
		paddingHorizontal: 7,
		borderLeftWidth: 5,
		borderLeftColor: colors.danger
	},
	name: {
		textAlign: 'center',
		fontSize: 30,
		color: colors.title,
		fontWeight: 'bold'
	},
	label: {
		color: colors.label,
		fontWeight: 'bold',
		fontSize: 20
	},
	text: {
		fontSize: 20,
		color: colors.text
	},
	emailWrapper: {
		backgroundColor: colors.light,
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	email: {
		fontSize: 16,
		color: '#fff'
	},
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.danger,
		width: 26,
		height: 26,
		borderRadius: 13
	}
});

export default ContactDetailsScreen;
