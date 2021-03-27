import React from "react";
import { View ,Text ,KeyboardAvoidingView,TouchableOpacity,Platform} from "react-native";
import {TextInput,Button,Avatar,RadioButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import axios  from 'axios';
import styles from './styles';

const Index = ({route,navigation}) => {
  // console.log(route.params.user_id)
    const [firstname, setfirstname] = React.useState('');
    const [lastname, setlastname] = React.useState('');
    const [checked, setChecked] = React.useState('1');
    const [avatar, setAvatar] = React.useState(require('../../../assets/users/1.png'));
    const [pic, setPic] = React.useState('');
    
   


      const openPicker =()=>{

        const options = {
          title: 'Select Avatar',
          customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        
        ImagePicker.showImagePicker(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('Image Picker Error: ', response.error);
          }
      
          else {
            let source = { uri: response.uri };
            setAvatar(source);
            // console.log('ressssddd',response.data)
            setPic(response)
          
          }
      
        });
      }

    const submitHandler = async() =>{
      // const text =  navigation.getParam('user_id')
      //  console.log('naee',route.params.user_id)
      const data = new FormData();
      data.append('profile_picture',{
        name: pic.fileName,
        type: pic.type,
        uri:
          Platform.OS === "android" ? pic.uri : pic.uri.replace("file://", "")
      });
      data.append('firstname',firstname);
      data.append('lastname',lastname);
      data.append('gender',checked);
      data.append('id',route.params.user_id);
      // AsyncStorage.setItem('user_id',result.data.user);
      // console.log(data)
      // let product = await axios.post('http://10.0.2.2:3000/update-profile',{
      //   body:data,
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'multipart/form-data'
      //   }
        
      // })
      fetch("http://10.0.2.2:3000/update-profile", {
        body: data,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          // Accept: "application/x-www-form-urlencoded",
        },
       }).then((response) => response.json())
       .then((responseJson) => {
          //  console.log('response object:',responseJson)
          if(responseJson.status==true){
          AsyncStorage.setItem('auth-token',responseJson.token);
          navigation.navigate('Home');
          }
       })
       .catch((error) => {
         console.error(error);
       });

       //.then(result=>{
      //   console.log("test",result.data)
      //   // AsyncStorage.setItem('user_id',result.data.user);
      // })
      // navigation.navigate('Home')
    }
  
   
    return (
       
        <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
           <Text style={styles.welcomeText}>
             WELCOME 
             <Button onPress={openPicker} title="Open image picker"/>
           </Text>

           

           <View style={styles.loginfrom}>
           
            <View>
              <Avatar.Image size={150} style={styles.profileImg} source={avatar} />
              <TouchableOpacity onPress={openPicker} style={styles.add}> 
                <Ionicons name="add-circle-outline" size={30} color="#DFD8C8"/>
              </TouchableOpacity>
            </View>

             <TextInput
                label="Firstname"
                value={firstname}
                onChangeText={firstname => setfirstname(firstname)}
                // keyboardType={"numeric"}
                theme={{colors:{primary:'blue'}}}
                mode="outlined"
                style={styles.numberText}
             />



             <TextInput
                label="lastname"
                value={lastname}
                onChangeText={lastname => setlastname(lastname)}
                // keyboardType={"numeric"}
                theme={{colors:{primary:'blue'}}}
                mode="outlined"
                style={styles.numberText}
             /> 
             
            <View style={{flexDirection:'row'}}> 
            <View  style={styles.genderBtn}>
            <RadioButton
                value="1"
                status={ checked === '1' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('1')}
            /><Text  style={styles.genderText}>Male</Text>
            </View>
            
            <View style={styles.genderBtn}>
            <RadioButton
                value="2"
                status={ checked === '2' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('2')}
            />
            <Text style={styles.genderText}>Female</Text>
            </View>
            </View>
           
            <Button 
            icon="" style={styles.button} 
            mode="contained" 
            onPress={() => submitHandler()}>
                next
            </Button>
            </View>
            

        </KeyboardAvoidingView>
        </View>
    );
};

export default Index;
