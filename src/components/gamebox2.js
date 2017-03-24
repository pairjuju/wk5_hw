import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image
} from 'react-native';
const gamebox2 = () => {
    const {container,img_s,pair,pair_first} = styles;
    return (
      <ScrollView>
      <View style={container}>
        <View style={[pair,pair_first]}>
          <Image style={img_s} source = {require('../Asset/img_leagueoflegends.png')} />
          <Text> </Text>
          <Image style={img_s} source = {require('../Asset/img_counterstrike.png')} />
        </View>
        <View style={pair}>
          <Image style={img_s} source = {require('../Asset/img_hearthstone.png')} />      
          <Text> </Text>
          <Image style={img_s} source = {require('../Asset/img_dota2.png')} />      
        </View>
        <View style={pair}>
          <Image style={img_s} source = {require('../Asset/img_h1z1.png')} />
          <Text> </Text>      
          <Image style={img_s} source = {require('../Asset/img_destiny.png')} />      
        </View>
      </View>
      </ScrollView>
    );
};
const styles={
    container:{
      width:380,
      height:520,
      backgroundColor:'#eee',
      alignItems:'center',
      justifyContent:'center',
      
    },
    pair_first:{
        marginTop:35,
    },
    pair:{
        width:365,
        marginLeft:-3,
        flexDirection:'row',
    },
    img_s:{
      backgroundColor:'#FF0000',
      marginTop:5,
      width:180,
      height:180,      
    }
}
export default gamebox2;