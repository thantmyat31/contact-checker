import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

const ContactsListItem = ({item}) => {

  const handleOnPress = () => {
    alert('handleOnPress');
  };

  const iconLink =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png';

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <View style={[styles.row]}>
          <Image
            style={styles.image}
            source={{
              uri: item.thumbnailPath ? item.thumbnailPath : iconLink,
            }}
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
