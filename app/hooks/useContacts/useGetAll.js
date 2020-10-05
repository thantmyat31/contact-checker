import {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

export const useGetAll = () => {
  const [data, setData] = useState();

  const getAll = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );
      if (permission !== 'granted') return;
      Contacts.getAll((err, contacts) => {
        if (err === 'denied') {
          console.log(err);
        } else {
          setData(contacts);
        }
      });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return data;
};
