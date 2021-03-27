import React,{useState,useEffect} from "react";
import { View,Text,TouchableOpacity,ScrollView } from "react-native";
import {Avatar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


const Index = ({route,navigation}) => {
      // alert(route.params.user_id)
      
      const [profileImage, setprofileImage] = useState();
      const [name, setname] = useState()
      const [gender, setgender] = useState()
      const [age, setage] = useState()
      const [city, setcity] = useState()
      const [country, setcountry] = useState()
      // const [place, setplace] = useState()
      const [relationship, setrelationship] = useState()
      const [about, setabout] = useState()

      useEffect(()=>{
      getUserDetails();
      VisiterTrack();
      },[]);

      const getUserDetails = async()=>{
            var token = await AsyncStorage.getItem('auth-token');
            var config ={
              headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization": "Bearer "+token
              },
            }

      await axios.post('http://10.0.2.2:3000/users/profile/user-profile',{user_id:route.params.user_id},config)
                       .then(result=>{
                         if(result.data.status==true){
                         console.log(result.data.data.user.firstname)
                          setprofileImage(result.data.data.user.image);
                          setname(result.data.data.user.firstname);
                          setgender(result.data.data.user.gender);
                        //   setage(result.data.data.unread_msg);
                          setcity(result.data.data.user.city);
                          setcountry(result.data.data.user.country);
                        //   setrelationship(result.data.data.unread_msg);
                        //   setabout(result.data.data.unread_msg);
                        //   setrelationship(result.data.data.unread_msg);
                        //   console.log(profilePriture)
                        }else{
                          alert("somthing is wrong");
                        }
          
                       })
      }



      const VisiterTrack = async()=>{
        
        var token = await AsyncStorage.getItem('auth-token');
        var config ={
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization": "Bearer "+token
          },
        }

  await axios.post('http://10.0.2.2:3000/users/profile/visit',{user_id:route.params.user_id},config)
                   .then(result=>{
                    console.log(result.data)
      
                   })
      }




    return (
        <View style={styles.container}>
           <ScrollView style={{marginTop:10}}>
            <View style={{marginLeft:10}}>
             <View style={{flexDirection:"row"}}>
                   <AntDesign name="heart" size={40} color="red" />
                   <Entypo name="flower" size={40} color="red"/>
                   <AntDesign name="heart" size={40} color="red" />
                   <Entypo name="flower" size={40} color="red"/>
                   <AntDesign name="heart" size={40} color="red" />
                   <Entypo name="flower" size={40} color="red"/>
             </View>
            

            <View style={{marginTop:20,flexDirection:'row',alignItems:'center'}}>
             <Avatar.Image 
             size={150}  
             source={{uri:'http://10.0.2.2:3000'+profileImage}} 
             />   

             <Text style={{fontWeight:'bold',fontSize:20,marginLeft:30}}>
                 Hi, i am new here
            </Text>
           </View>
           
           <View  
           style={{
             flexDirection:'row',
             justifyContent:'space-around',
             marginTop:20
           }}>
           <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
               <MaterialIcons 
               name="add-comment" 
               size={50} 
               color="#7B3D79"
               
               />
         </TouchableOpacity>

         <TouchableOpacity >
               <AntDesign 
               name="gift" 
               size={50} 
               color="#7B3D79"
               />
         </TouchableOpacity>


         <TouchableOpacity >
               <MaterialIcons 
               name="add-circle" 
               size={50} 
               color="#7B3D79"
               />
         </TouchableOpacity>
         </View>

           <View style={{marginTop:15}}>
           <Text style={styles.TextInfo}>Name:{name}</Text>
           <Text style={styles.TextInfo}>Gender:{gender==1 ? "Male":"Female"}</Text>
           <Text style={styles.TextInfo}>Age:21</Text>
           <Text style={styles.TextInfo}>Place:{city ? city+','+country:country }</Text>
           <Text style={styles.TextInfo}>Relationship:Oo Mira</Text>
           <Text style={styles.TextInfo}>About Me:Oo Mira</Text>
                 
           </View>

           </View>

           </ScrollView>
        </View>
    );
};

export default Index;
