import React from 'react';
import {Button, FlatList} from 'react-native';
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

  const mailsToSend = filtered.map((data) => {
    const mail = {
      id: data.recordID,
      name: data.displayName,
      emails: data.emailAddresses,
      phones: data.phoneNumbers,
    };
    return mail;
  });

  const handleOnSendNotification = () => {
    fetch('http://192.168.8.109:5000/api/notification/sendToAll', {
      method: 'POST',
    })
      .then((res) => console.log('success'))
      .catch((err) => console.log(err));
  };

  const handleOnSendData = () => {
    try {
      fetch('http://192.168.8.109:5000/api/notification/getmails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailsToSend),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Screen>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filtered}
        renderItem={({item}) => <ContactsListItem item={item} />}
      />
      <Button title="send data" onPress={handleOnSendData} />
    </Screen>
  );
};

export default ContactsList;
