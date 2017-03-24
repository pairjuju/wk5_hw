import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

const header = () => {
    const { box, header, img_trans, other } = styles;
    return (
        <View>
            <View style={[other]}></View>

                <View style={[header]}>
                    <Image style={[img_trans]} source={require('../Asset/btn_back.png')} />
                    <Text style={[box]}>Hearthstone</Text>
                    <Image style={[img_trans]} source={require('../Asset/btn_like.png')} />
                </View>        
            
        </View>
    );
};

const styles = {
    other: {
        height: 20,
        backgroundColor: '#6441a5',
    },
    header: {
        backgroundColor: '#6441a5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_trans: {
      width: 33,
      height: 33,
    },
    box: {
        backgroundColor: '#6441a5',
        color: '#fff',
        padding:13,
        width: 292,
        textAlign: 'center',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
};

export default header;