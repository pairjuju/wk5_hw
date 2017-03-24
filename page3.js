import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Search from './src/components/search';
import Bar from './src/components/bar';
import Gamebox2 from './src/components/gamebox2';

const page3 = () => {
    return(
    <View >
        <View >
            <Search />
            <Gamebox2 />
            <Bar />
        </View>
    </View>
    )
}
export default page3;