import React from 'react';
import { WebView } from 'react-native-webview';

const FAQScreen = () => {  
    return <WebView source={{ uri: 'https://www.who.int/news-room/q-a-detail/q-a-coronaviruses' }}/>;
}
export default FAQScreen;