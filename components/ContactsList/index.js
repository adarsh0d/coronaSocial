import React, {useState, useEffect} from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import colors from '../../utils/colors';
import { Ionicons } from '@expo/vector-icons';
const renderHealthStatusColor = (param) => {
    switch(param) {
        case 'healthy':
            return colors.green;
        case 'sick':
                return colors.red;
        default:
            return colors.greyDarker;
    }
  };
const renderHealthStatusIcon = (param) => {
    switch(param) {
        case 'healthy':
            return 'md-heart';
        case 'sick':
            return 'md-heart-dislike';
        default :
            return 'ios-heart-empty';
    }
};

const getHealthStatus = (status) => {
    switch(status) {
        case 'healthy': 
            return 'Healthy'
        case 'sick': 
            return 'Sick'
        default:
            return 'Unknown'
    }
}

const getStatus = (status) => {
    switch(status) {
        case 'home': 
            return 'Home'
        case 'out': 
            return 'Out'
        case 'travelling':
            return 'Travelling'
        default: 
            return 'Unknown'
    }
}
const getStatusColor = (status) => {
    switch(status) {
        case 'home': 
            return colors.green
        case 'out': 
            return colors.red
        case 'travelling':
            return colors.orange
        default:
            return colors.gray
    }
}
  
const ContactsList = ({contacts}) => {
    const _keyExtractor = item => item.id;
    const _renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, padding: 5, borderBottomWidth: 1, borderBottomColor: '#CCC', border: 2}}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumbers && item.phoneNumbers[0]? item.phoneNumbers[0].number : ''}</Text>
            <View style={{backgroundColor: getStatusColor(item.status), alignSelf: 'flex-start', padding: 5, width: 'auto', borderRadius: 5}}>
                <Text style={{color: colors.white}}>{getStatus(item.status)}</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>         
            <Ionicons name={renderHealthStatusIcon(item.health)} size={32} style={{color: renderHealthStatusColor(item.health)}}></Ionicons>
            <Text>{getHealthStatus(item.health)}</Text>
          </View>
        </View>
      );
    return (
        <View style={{backgroundColor: '#FFF', flex: 1}}>
            <FlatList
                data={contacts}
                renderItem={_renderItem}
                keyExtractor={_keyExtractor}
                ListEmptyComponent={<View style={{paddingTop: 300, justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style={{fontSize: 36, fontWeight: '600'}}>No Contacts</Text></View>}>
            </FlatList>
        </View>
    )
}

export default  ContactsList;