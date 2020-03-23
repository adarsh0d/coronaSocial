import React from 'react';
import { View, FlatList, Text } from 'react-native';

const HealthLogList = ({logs}) => {
    const _keyExtractor = item => item.id;
    const _renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', height: 40, margin: 5, padding: 5,borderBottomWidth: 1, borderBottomColor: '#CCC', border: 2}}>
          <View style={{ flex: 1 }}>
            <Text>{item.status}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>{new Date(item.time).toLocaleString()}</Text>
          </View>
        </View>
      );
    return (
        <View style={{paddingTop: 30, backgroundColor: '#FFF', flex: 1}}>
            <FlatList
                data={logs}
                renderItem={_renderItem}
                keyExtractor={_keyExtractor}
                ListEmptyComponent={<View style={{paddingTop: 300, justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style={{fontSize: 36, fontWeight: '600'}}>No Logs</Text></View>}>
            </FlatList>
        </View>
    )
}

export default  HealthLogList;