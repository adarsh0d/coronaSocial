import React, {useState} from 'react';
import { Picker, View, Button } from 'react-native';
import Navigator from './Navigator';

export default function App() {
  const [status, setStatus] = useState('athome');
  const [healthStatus, setHealthStatus] = useState('healthy');
  return (
    <View style={{ flex: 1 }}>
      <View style={{flexDirection: 'row'}}>
        <Picker
          selectedValue={status}
          onValueChange={(val) => setStatus(val)}
          style={{alignItems: 'center', borderRadius: 4, width: '50%'}}
          >
          <Picker.Item label="Home" value="athome" />
          <Picker.Item label="Out" value="out" />
          <Picker.Item label="Travelling" value="travelling" />
        </Picker>
        <Picker
          selectedValue={healthStatus}
          onValueChange={(val) => setHealthStatus(val)}
          style={{alignItems: 'center', borderRadius: 4, width: '50%'}}
          >
          <Picker.Item label="Feeling Healthy" value="healthy" />
          <Picker.Item label="Feeling Sick" value="sick" />
        </Picker>
      </View>
      <Navigator/>
    </View>
  );
}
