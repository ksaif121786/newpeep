import React from "react";
import { View,Text,TouchableOpacity,ScrollView } from "react-native";
import {Avatar} from 'react-native-paper';
import styles from './styles';
const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
           <ScrollView style={{marginTop:10}}>
            
            <TouchableOpacity 
            style={styles.wrapper}
            onPress={() => navigation.navigate('User Profile',{username:"Oo mira"})}
            >
                 <Avatar.Image size={40}  source={require('../../../assets/users/1.png')} />
                 <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>Oo Mira</Text>
           </TouchableOpacity>

                  
           <TouchableOpacity 
           style={styles.wrapper}
           onPress={() => navigation.navigate('User Profile',{username:"saif khan"})}>
                 <Avatar.Image size={40}  source={require('../../../assets/users/2.png')} />
                 <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>SAIF KHAN</Text>
           </TouchableOpacity>



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
