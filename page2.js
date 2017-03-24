import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Header from './src/components/header';
import Choose from './src/components/choose';
import Bar from './src/components/bar';
import Gamebox from './src/components/gamebox1';

const page2 = () => {
    return(
    <View >
        <View >
            <Header />
            <Choose />
            <Gamebox />
            <Bar />
        </View>
    </View>
    )
}
export default page2;