import React from 'react';
import {Button, FlatList} from 'react-native';

import {useGetAll} from './../hooks/contacts/useGetAll';
import { handleOnSendNotification, handleOnSendData } from './../api/services';

import ContactsListItem from './ContactsListItem';
import LoadingScreen from './LoadingScreen';
import Screen from './Screen';
 

const ContactsList = () => {
  const contacts = useGetAll();

  if (!contacts) {
    return <LoadingScreen />;
  }

  const filtered = contacts.filter((c) => c.emailAddresses.length > 0);

  return (
    <Screen>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filtered}
        renderItem={({item}) => <ContactsListItem item={item} />}
      />
      <Button title="send data" onPress={() => handleOnSendData(filtered)} />
      <Button title="Send Notification" onPress={handleOnSendNotification} color="#ff0000" />
    </Screen>
  );
};

export default ContactsList;
