import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';

const ContactsListItem = ({ item }) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate(routes.CONTACT_DETAILS, { item });
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <View style={[styles.row]}>
          <Image
            style={styles.image}
            source={
              !item.thumbnailPath ? 
              require('./../assets/image/icon.png') : 
              { uri: item.thumbnailPath }
          }
          />
          <Text style={styles.name}>{item.displayName}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 3,
    borderBottomColor: '#eee',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  image: {width: 50, height: 50, borderRadius: 25},
  name: {fontSize: 16, marginLeft: 10},
});

export default ContactsListItem;
