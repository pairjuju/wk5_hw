import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
const search = () => {
    const { container,searchFrame,searchImg,searchText,imgCast} = styles;
    return (
      <View style={container}>
        <View style={searchFrame}>
        <Image style={searchImg} source={require('../Asset/icon_search.png')} />
        <Text style={searchText}>search</Text>       
        </View>
        <Image style={imgCast} source={require('../Asset/btn_cast.png')} />        
      </View>
    );
};
const styles={
  container:{
    paddingTop:22,
    paddingBottom:5,
    backgroundColor:'#6441a5',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',

  },
  searchFrame:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10,
    marginTop:10,
    width:310,
    backgroundColor:'#312852',
    borderRadius:5,
  },
  searchImg:{
    width:20,
    padding:1,
    marginLeft:5,    
    height:20,
  },
  searchText:{
    padding:5,
    color:'#fff',
    fontSize:18,
  },
  imgCast:{
    margin:5,
    marginTop:10,
    width:35,
    height:35,
  }
}
export default search;