import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
const page1 = () => {
    const { bg,pic } = styles;
    return(
    <View style={bg}>
            <Image style={pic} source ={require('./src/Asset/logo_twitch.png')} />
        </View>
    );
};

const styles ={
    pic:{       
        width:185.5,
        height:61.5,
    },
    bg:{
        backgroundColor:'#6441a5',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
};

export default page1;