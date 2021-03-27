import React,{useState,useEffect} from "react";
import { View,Text,TouchableOpacity,ScrollView, VirtualizedList } from "react-native";
import {Avatar} from 'react-native-paper';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';




const Index = ({navigation}) => {

    const [userdata, setuserdata] = useState([]);
   
    useEffect(()=>{
     getRecentVisitors();
    },[])
    
    const getRecentVisitors =async()=>{
      var token = await AsyncStorage.getItem('auth-token');
      var config ={
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization": "Bearer "+token
        },
      }

await axios.get('http://10.0.2.2:3000/users/profile/my-visiters',config)
                 .then(result=>{
                  console.log(result.data.data)
                  if(result.data.status==true){
                        setuserdata(result.data.data.visiters)
                  }
    
                 })
    }

    return (
        <View style={styles.container}>
           <ScrollView style={{marginTop:10}}>
            
            
            
            {
                userdata.length != 0 ?
                  userdata.map(item=>{
                        return    <TouchableOpacity 
                        style={styles.wrapper}
                        onPress={() => navigation.navigate('User Profile',{user_id:item.id,username:item.firstname})}
                        >
                             <Avatar.Image size={40}  source={{uri:'http://10.0.2.2:3000/'+item.image}} />
                             <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>{item.firstname}</Text>
                             <Text style={{
                                 fontSize:15,
                                 
                                 fontWeight:'bold',
                                 marginLeft:'auto'
                                 }}>{item.createdAt}</Text>
                       </TouchableOpacity>
                  })
                  :
                  <View>
                        <Text style={{alignSelf:'center',marginVertical:250,fontSize:20}}>You dont have visitors</Text>
                  </View>
                 
                  
            }
          

                  
           {/* <TouchableOpacity 
           style={styles.wrapper}
           onPress={() => navigation.navigate('User Profile',{username:"saif khan"})}>
                 <Avatar.Image size={40}  source={require('../../../assets/users/2.png')} />
                 <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>SAIF KHAN</Text>
                 <Text style={{
                  fontSize:15,
                 
                  fontWeight:'bold',
                  marginLeft:'auto'   
                 }}>30 min ago</Text>
           </TouchableOpacity> */}



           {/* <TouchableOpacity style={styles.wrapper}>
                 <Avatar.Image size={40}  source={require('../../../assets/users/default.png')} />
                 <Text style={{fontSize:20,marginLeft:10}}>SANA KHAN</Text>
           </TouchableOpacity>



           <TouchableOpacity style={styles.wrapper}>
                 <Avatar.Image size={40}  source={require('../../../assets/users/default.png')} />
                 <Text style={{fontSize:20,marginLeft:10}}>MUKTA MEHMUD</Text>
           </TouchableOpacity>


           <TouchableOpacity style={styles.wrapper}>
                 <Avatar.Image size={40}  source={require('../../../assets/users/default.png')} />
                 <Text style={{fontSize:20,marginLeft:10}}>ZAID ALI</Text>
           </TouchableOpacity> */}


           </ScrollView>
        </View>
    );
};

export default Index;
