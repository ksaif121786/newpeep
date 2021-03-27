import React,{useState,useEffect} from "react";
import { View,Text } from "react-native";
import {Avatar,TextInput,RadioButton,Button} from 'react-native-paper';
import styles from './styles';

const Index = () => {

const [name, setname] = useState("");
const [text, setText] = useState("");
const [gender,setgender] = useState('male');
const [status,setstatus] = useState('1');
const [bio,setbio] = useState('');

    return (
        <View style={styles.container}>
           <View style={styles.profileImg}>
           <Avatar.Image size={150}  
           source={require('../../../assets/users/2.png')} />
           </View>
           

           <View style={styles.detailsWrapper}>
           <TextInput
                label="Name"
                value={name}
                onChangeText={name => setname(name)}
                theme={{colors:{primary:'blue'}}}
                mode="outlined"
                style={styles.numberText}
             />
            
            <View style={{flexDirection:'row'}}> 
            <View  style={styles.genderBtn}>
            <RadioButton
                value="male"
                status={ gender === 'male' ? 'checked' : 'unchecked' }
                onPress={() => setgender('male')}
            /><Text  style={styles.genderText}>Male</Text>
            </View>
            
            <View style={styles.genderBtn}>
            <RadioButton
                value="female"
                status={ gender === 'female' ? 'checked' : 'unchecked' }
                onPress={() => setgender('female')}
            />
            <Text style={styles.genderText}>Female</Text>
            </View>
            </View>
            
              
            {/* <TextInput
                label="DOB"
                value={name}
                onChangeText={name => setname(name)}
                theme={{colors:{primary:'blue'}}}
                mode="outlined"
                style={styles.numberText}
             /> */}
            <TextInput
                label="Place"
                value={name}
                onChangeText={name => setname(name)}
                theme={{colors:{primary:'blue'}}}
                mode="outlined"
                style={styles.numberText}
             />


          <View style={{flexDirection:'row'}}> 
            <View  style={styles.genderBtn}>
            <RadioButton
                value="1"
                status={ status === '1' ? 'checked' : 'unchecked' }
                onPress={() => setstatus('1')}
            /><Text  style={styles.genderText}>Single</Text>
            </View>
            
            <View style={styles.genderBtn}>
            <RadioButton
                value="2"
                status={ status === '2' ? 'checked' : 'unchecked' }
                onPress={() => setstatus('2')}
            />
            <Text style={styles.genderText}>In a relationship</Text>
            </View>
            </View>


            

            <TextInput
                label="About me"
                value={bio}
                onChangeText={bio => setbio(bio)}
                theme={{colors:{primary:'blue'}}}
                mode="outlined"
                multiline={true}
                numberOfLines={3}
                style={styles.numberText}
             />

             
             </View>

             

             <Button icon="" style={styles.button} mode="contained" onPress={() => navigation.navigate('Profile')}>
                save
            </Button>

        </View>
    );
};

export default Index;
