/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
import ContactsList from './app/components/ContactsList';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    getToken();
    createChannel();
    notificationListener();
  }, []);

  // Get Token
  const getToken = async () => {
    const firebaseToken = await firebase.messaging().getToken();
    if (firebaseToken) firebase.messaging().subscribeToTopic('topic');
    console.log(firebaseToken);
  };

  // Create Channel
  const createChannel = () => {
    const channel = new firebase.notifications.Android.Channel(
      'channelId',
      'channelName',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('Description');

    firebase.notifications().android.createChannel(channel);
  };

  // Foreground Notification
  const notificationListener = () => {
    firebase.notifications().onNotification((notification) => {
      if (Platform.OS === 'android') {
        const localNotification = new firebase.notifications.Notification({
          sound: 'default',
          show_in_foreground: true,
        })
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          .setSubtitle(notification.subtitle)
          .setBody(notification.body)
          .setData(notification.data)
          .android.setChannelId('channelId')
          .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
      <ContactsList />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
