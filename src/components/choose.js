import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
const choose = () =>{
  const {square_uch,square_ch,container,headertext_c,headertext_nc}=styles;
    return(
      <View style={container}>
          <View style={square_ch}>
            <Text style={headertext_c}>Live</Text>
          </View>
          <View style={square_uch}>
            <Text style={headertext_nc}>Recent</Text>
          </View>   
      </View>
    );
};
const styles ={
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:375,
    backgroundColor:'#ff0000',
  },
  square_uch:{
    backgroundColor:'#fff',
    width:187.5,
    padding:12,
    alignItems:'center',
    borderBottomWidth: 4,
    borderBottomColor: '#fff',
  
  },
  square_ch:{
    backgroundColor:'#fff',
    width:187.5,
    padding:12,
    alignItems:'center',
    borderBottomWidth: 4,
    borderBottomColor: 'rgb(100,65,165)',
  },
  headertext_c:{
    fontSize:18,
    color:'rgb(100,65,165)',
  },
  headertext_nc:{
    fontSize:18,
    color:'#999',
  },
}
export default choose;