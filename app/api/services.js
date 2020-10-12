export const handleOnSendNotification = () => {
  fetch('http://192.168.8.109:5000/api/notification/sendToAll', {
    method: 'POST',
  })
    .then((res) => console.log('success'))
    .catch((err) => console.log(err));
};

export const handleOnSendData = (getContacts) => {
  const contacts = getContacts.map((data) => {
    const mail = {
      id: data.recordID,
      name: data.displayName,
      emails: data.emailAddresses,
      phones: data.phoneNumbers,
    };
    return mail;
  });

  try {
    fetch('http://192.168.8.109:5000/api/notification/getmails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contacts),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
