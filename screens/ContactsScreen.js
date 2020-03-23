
import React, { useState, useEffect } from 'react';
import { Alert, View, TextInput as Input} from 'react-native';
import * as Contacts from 'expo-contacts';
import Utils from '../utils/utils';
import ContactsList from '../components/ContactsList';
import subscriptions from '../data/data';

const ContactsScreen = () => {
    const [contacts, setContacts] = useState([]);
    const [originalContacts, setOriginalContacts] = useState([]);
    const search = (searchText) => {
       setContacts(contacts => searchText? Utils.filterArrayByString(originalContacts, searchText): originalContacts);
    };
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync();
            if (data.length > 0) {
                data.map((e) => {
                    if(e.phoneNumbers && e.phoneNumbers.length > 0) {
                        let temp = subscriptions.find(element => element.id.toString() === e.phoneNumbers[0].number.replace(/\s/g, ''))
                        if(temp) {
                            Object.assign(e, {
                                health: temp.health,
                                status: temp.status,
                                priority: temp.priority
                            })
                        }
                    }
                    return e;
                });
                const contactsAv = data.filter(e => e.priority).concat(data.filter(e => !e.priority));
                setContacts(() => contactsAv);
                setOriginalContacts(() => contactsAv);
            }
          }
        })();
    }, []);
    
    return (
        <View style={{flex: 1}}>
            <View>
                <Input placeholder="Search Contacts"
                    onChangeText={search}
                    style={{alignItems: 'center',
                    borderRadius: 4,
                    margin: 10,
                    color: '#000',
                    padding: 10,
                    backgroundColor: '#ffffff'}}
                />
            </View>
            <ContactsList contacts={contacts}></ContactsList>
        </View>
    )
}

export default ContactsScreen;