
import React from 'react';
import { WebView } from 'react-native-webview';

const Statistics = () => {   
    return <WebView source={{ uri: 'https://www.worldometers.info/coronavirus/' }}/>;
}

export default Statistics;