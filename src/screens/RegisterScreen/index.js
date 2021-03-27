import React,{useState,useEffect} from "react";
import { View,
  Text,
  Animated ,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { TextInput,Button } from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';
// import { Dropdown } from 'react-native-material-dropdown-v2';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import styles from './styles';



const Index = ({ navigation}) => {

    const [phone, setphone] = useState('');
    const [country, setcountry] = useState("");
    const [countrydata, setcountrydata] = useState([])
    // const uniqueId = DeviceInfo.getUniqueID();
    useEffect(()=>{
        //  console.warn('ok');
         IsLogged();
         getCountryCode();
      },[])


    const IsLogged =async()=>{
     var token = await AsyncStorage.getItem('auth-token');
     token ?  navigation.navigate('Home'):navigation.navigate('Register')
    }
     const getCountryCode = async()=>{
        // console.warn('ok')
      await axios.post('http://10.0.2.2:3000/get-countries',{
       headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({
          "status":1,
          "is_deleted":0
        })
      }).then(result=>{
        // console.log(result.data.data.country)
        if(result.data.status==true)
        {
          setcountrydata(result.data.data.country)
          // console.log(result.data.data.country)
          
        }else{
          Alert.alert('Something went wrong.')
        }
          // console.log(data.data.country)
      })
     } 
     

    


     const handlerLogin =async() =>{
    //  console.log(country.split(" "))
    // navigation.navigate('Profile')
      var capsule={
        "country":country,
        "phone":phone,
        "device_type":Platform.OS,
        "device_token":DeviceInfo.getUniqueId(),
      }
      // console.log(capsule)
    
      await  axios.post('http://10.0.2.2:3000/register',{
        headers:{
          "Content-Type":"application/json"
        },
        capsule
        }).then(result=>{
         console.log(result)
        // alert(data)
        if(result.data.status==true){
          console.log('okkkkkkkkkkkkkkkk',result.data.token)
          // AsyncStorage.setItem('user_id',result.data.user);
          if(result.data.token !==""){
            
            AsyncStorage.setItem('auth-token',result.data.token);
            navigation.navigate('Home');
          }else{
            navigation.navigate('Profile',{user_id:result.data.user})
          }
          
          
        }else{
           Alert.alert("Something is went wrong")
          // console.log(result)
        }
      })
        
      }
   


      let myUsers = countrydata.map((item,key)=>{
        // console.log(item)
        return(
        <Picker.Item label={`+${item.phonecode+' '+item.name}`} value={item.id} key={key}/>
        )
        });


    return (
        
     
        <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
           <Text style={styles.welcomeText}>
             WELCOME
           </Text>

           <View style={styles.loginfrom}>
           
           {/* <View style={{ flexDirection:'row'}}> */}

             <View style={{
               borderWidth:2,
               borderRadius:5,
               borderColor: 'blue',
               margin:18,
               width: "90%"}}>
           <Picker
            
            selectedValue={country}
            // style={{height: 50, width: 100,backgroundColor:'red'}}
            onValueChange={(e) =>
              setcountry(e)
            }>
                <Picker.Item label="Country" value={0} key={0}/>
            {myUsers}
          </Picker>
          </View>
                    

           
             
             <TextInput
                label="Number"
                value={phone}
                onChangeText={phone => setphone(phone)}
                keyboardType={"numeric"}
                theme={{colors:{primary:'blue'}}}
                mode="outlined"
                style={styles.numberText}
             />
           {/* </View> */}


            <Button icon="" 
            style={styles.button} 
            mode="contained" 
            onPress={() => handlerLogin()}>
                next
            </Button>
            </View>
            

        </KeyboardAvoidingView>
        </View>
        
    );
};

export default Index;
