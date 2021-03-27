import React from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    welcomeText:{
        color:'gray',
        fontSize:35,
        marginTop:10,
        marginLeft:100
       
    
    },
    loginfrom:{
        marginVertical:30
    },
    profileImg:{
        marginLeft:100,
        alignItems:'center',
    },
    button:{
        marginTop:80,
        marginLeft:18,
        marginRight:18,
        borderRadius:20,
        backgroundColor:'#7B3D79'
    },
    
    numberText:{
        marginTop:20,
        marginLeft:18,
        marginRight:18
    },
    genderBtn:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        
      
    },
    genderText:{
    fontSize:20
    },
    
    add:{
        backgroundColor:'#41444B',
        position:'absolute',
        borderRadius:60,
        bottom:10,
        right:160,
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center'
    }
})

 
export default styles;