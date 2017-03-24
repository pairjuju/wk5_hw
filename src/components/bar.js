import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
const bar = () => {
    const {container,textStyleForGame,img_s,img_box,textStyle} = styles;
    return (
      <View style={container}>
        <View style={img_box}>
          <Image style={img_s} source = {require('../Asset/btn_games_selected.png')} />
          <Text style={textStyleForGame}>game</Text>
        </View>
        <View style={img_box}>
          <Image style={img_s} source = {require('../Asset/btn_channels.png')} />
          <Text style={textStyle}>channel</Text>
        </View>
        <View style={img_box}>
          <Image style={img_s} source = {require('../Asset/btn_following.png')} />
          <Text style={textStyle}>following</Text>
        </View>
        <View style={img_box}>
          <Image style={img_s} source = {require('../Asset/btn_me.png')} />
          <Text style={textStyle}>me</Text>
        </View>
      </View>
    );
};
const styles={
  container:{
    width:375,
    paddingTop:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  img_s:{
    width:50,
    height:50,
  },
  img_box:{
    width:93,
    alignItems:'center',
    justifyContent:'center',
  },
  textStyleForGame:{
    position:'absolute',
    bottom:0,
    color:'#6441a5',
  },
  textStyle:{
    position:'absolute',
    bottom:0,
    color:'#666'
  }
}
export default bar;