import React from 'react';
import {FlatList} from 'react-native';
import {useGetAll} from './../hooks/useContacts/useGetAll';
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
    </Screen>
  );
};

export default ContactsList;
