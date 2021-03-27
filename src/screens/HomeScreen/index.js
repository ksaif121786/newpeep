import React,{useState,useEffect} from "react";
import { View,Text ,TouchableOpacity} from "react-native";
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Index = ({navigation}) => {

const [profilePriture, setprofilePriture] = useState("")
const [totalFriend, settotalFriend] = useState("")
const [onlineFriend, setonlineFriend] = useState("")
const [unreadMessage, setunreadMessage] = useState("")

useEffect(()=>{
  getHomeData();
},[])


//get home data
const getHomeData = async()=>{
  var token = await AsyncStorage.getItem('auth-token');
  var config ={
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization": "Bearer "+token
    },
  }
  await axios.get('http://10.0.2.2:3000/users/home',config)
             .then(result=>{
               if(result.data.status==true){
              //  console.log(result.data)
                setprofilePriture(result.data.data.user.image);
                settotalFriend(result.data.data.total_friends);
                setonlineFriend(result.data.data.online_friends);
                setunreadMessage(result.data.data.unread_msg);
                console.log(profilePriture)
              }else{
                alert("somthing is wrong");
              }

             })
}
    return (
        <View style={styles.container}>

          <View style={styles.profileImg}>
           <Avatar.Image size={150}  source={{ uri:'http://10.0.2.2:3000'+profilePriture}} />
          </View>
          
          <View style={styles.wrapsection}>
          
          <View style={styles.sections}/>

          <TouchableOpacity 
          style={{flexDirection:'row',padding: 2}}
          onPress={()=> navigation.navigate('My Friends')}
          > 
          <Icon name="arrow-right" size={30} color="green" />
          <Text style={styles.sectionText}>My Friends({totalFriend}/{onlineFriend})</Text>
          </TouchableOpacity>
          
          <View style={styles.sections}/>

          <TouchableOpacity 
           style={{flexDirection:'row',padding: 2}}
           onPress={()=> navigation.navigate('New PMS')}
           > 
          <Icon name="arrow-right" size={30} color="green" />
          <Text style={styles.sectionText}>New PMS({unreadMessage})</Text>
          </TouchableOpacity>


         
          <View style={styles.sections}/>
          <TouchableOpacity 
          style={{flexDirection:'row',padding: 2}}
          onPress={()=> navigation.navigate('Online Peepers')}> 
          <Icon name="arrow-right" size={30} color="green" />
          <Text style={styles.sectionText}>Online Peepers</Text>
          </TouchableOpacity>

           
          <View style={styles.sections}/>
          <TouchableOpacity 
          style={{flexDirection:'row',padding: 2}}
          onPress={()=> navigation.navigate('Big Pinboard')}> 
          <Icon name="arrow-right" size={30} color="green" />
          <Text style={styles.sectionText}>Big Pinboard</Text>
          </TouchableOpacity>
          
         
         

          <View style={styles.sections}/>
          <TouchableOpacity  
          style={{flexDirection:'row',padding: 2}}
          onPress={()=> navigation.navigate('Shop')}> 
          <Icon name="arrow-right" size={30} color="green" />
          <Text style={styles.sectionText}>Shop</Text>
          </TouchableOpacity>

          <View style={styles.sections}/>
          <TouchableOpacity 
          style={{flexDirection:'row',padding: 2}}
          onPress={()=> navigation.navigate('P News')}> 
          <Icon name="arrow-right" size={30} color="green" />
          <Text style={styles.sectionText}>P-News</Text>
          </TouchableOpacity>
          

          <View style={styles.sections}/>
          <TouchableOpacity 
          style={{flexDirection:'row', padding: 2}}
          onPress={()=> navigation.navigate('Recent Visiters')}> 
          <Icon name="arrow-right" size={30} color="green" />
          <Text style={styles.sectionText}>Recent Visiters</Text>
          </TouchableOpacity>
          
          </View>


          
          
        </View>
    );
};

export default Index;
