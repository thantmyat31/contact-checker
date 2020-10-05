import React, {useState, useEffect} from 'react';
import {Button, FlatList, StyleSheet} from 'react-native';
import {useGetAll} from './../hooks/useContacts/useGetAll';
import ContactsListItem from './ContactsListItem';
import LoadingScreen from './LoadingScreen';
import Screen from './Screen';

const ContactsList = () => {
  let contacts = useGetAll();

  if (!contacts) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={contacts}
        renderItem={({item}) => <ContactsListItem item={item} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ContactsList;
