import React,{useState,useEffect} from "react";
import { View,Text,Image,ScrollView,TouchableOpacity } from "react-native";
import {Avatar} from 'react-native-paper';
import { Icon } from 'react-native-elements';
import styles  from "./styles"
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

const Index = ({navigation}) => {

    const [userdata, setuserdata] = useState([]);
   
 useEffect(()=>{
  getOnlineUsers();
 },[]);


 //get online users
 const getOnlineUsers = async() =>{

   var token = await AsyncStorage.getItem('auth-token');
    // alert(token)
    var config ={
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization": "Bearer "+token
        },
      }
//    console.log(config)
   await axios.get('http://10.0.2.2:3000/users/get-users-list',config)  
              .then(result=>{
                setuserdata(result.data.data.user)
                console.log(result.data.data)
              })

 }

    return (
        <ScrollView>
        <View  style={styles.container}>
       
            {
                userdata.map((item)=>{
                    return  <TouchableOpacity style={styles.userWrapper}   onPress={() => navigation.navigate('User Profile',{user_id:item.id,username:item.firstname})}>
                    <Image 
                    // size={100} 
                    style={styles.userImg} 
                    source={{uri:'http://10.0.2.2:3000'+item.image}} >
                    </Image>
                    <Text style={{alignSelf:'center'}}>{item.firstname}</Text>
                    </TouchableOpacity>
                })
            }
           

            {/* <TouchableOpacity style={styles.userWrapper}   onPress={() => navigation.navigate('User Profile',{username:"Oo mira"})}>
            <Image 
            // size={100} 
            style={styles.userImg} 
            source={require('../../../assets/users/2.png')} >
            </Image>
            <Text style={{alignSelf:'center'}}>SAIF</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.userWrapper}   onPress={() => navigation.navigate('User Profile',{username:"Oo mira"})}>
            <Image 
            // size={100} 
            style={styles.userImg} 
            source={require('../../../assets/users/1.png')} >
            </Image>
            <Text style={{alignSelf:'center'}}>SAIF</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.userWrapper}   onPress={() => navigation.navigate('User Profile',{username:"Oo mira"})}>
            <Image 
            // size={100} 
            style={styles.userImg} 
            source={require('../../../assets/users/2.png')} >
            </Image>
            <Text style={{alignSelf:'center'}}>SAIF</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.userWrapper}   onPress={() => navigation.navigate('User Profile',{username:"Oo mira"})}>
            <Image 
            // size={100} 
            style={styles.userImg} 
            source={require('../../../assets/users/1.png')} >
            </Image>
            <Text style={{alignSelf:'center'}}>SAIF</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.userWrapper}   onPress={() => navigation.navigate('User Profile',{username:"Oo mira"})}>
            <Image 
            // size={100} 
            style={styles.userImg} 
            source={require('../../../assets/users/2.png')} >
            </Image>
            <Text style={{alignSelf:'center'}}>SAIF</Text>
            </TouchableOpacity> */}

            
         </View>
         </ScrollView>
    );
};

export default Index;
