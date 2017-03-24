import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image
} from 'react-native';
const gamebox = () => {
    const {container,img_s} = styles;
    return (
      <ScrollView>
      <View style={container}>
           <Image style={img_s} source = {require('../Asset/img_firebat.png')} />
          <Image style={img_s} source = {require('../Asset/img_forsen.png')} />
          <Image style={img_s} source = {require('../Asset/img_kolento.png')} />      
      </View>
      </ScrollView>
    );
};
const styles={
    container:{
      marginTop:105,
      width:375,
      height:375,
      backgroundColor:'#eee',
      alignItems:'center',
      justifyContent:'center',
    },
    img_s:{
      width:365,
      height:200, 
      marginTop:5,     
    }
}
export default gamebox;