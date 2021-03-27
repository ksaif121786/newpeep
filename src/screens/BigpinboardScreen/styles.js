import React from 'react';
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container:{
    //  marginLeft:10,
    //  marginRight:10,
    flex:1,
    margin:10
    },
    messageWrapLeft:{
        backgroundColor:'#E1EE99',
        // width:'87%',
        marginLeft:6,
        borderRadius:6,
        // height:'100%',
        padding:10
    },
    messageWrapRight:{
        backgroundColor:'white',
        // width:'87%',
        // marginLeft:6,
        borderRadius:6,
        padding:10,
    },
    sendMsg:{
        width: '90%', height: 50 //alignSelf: 'flex-start',

    },
    button:{
        width: '10%', height: 60,// alignSelf: 'flex-start'
    
    }
   
    
});

export default styles;



