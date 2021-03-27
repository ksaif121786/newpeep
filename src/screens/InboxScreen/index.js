import React from "react";
import { View,Text,TouchableOpacity,ScrollView } from "react-native";
import styles from './styles';
const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
           <ScrollView>

           <View style={styles.msgWrapper}>

              <View>
                  <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
                  <Text style={{ fontWeight:'bold',fontSize:20}}>Peep Master</Text>
                  
                  <Text style={{ fontWeight:'bold',fontSize:17}}>Hi,Welcome to peep. 
                  Now you can make friend and 
                  chat with them easy.
                  </Text>
                  </TouchableOpacity>
                  
             </View>
           </View>
           


       


           </ScrollView>
        </View>
    );
};

export default Index;
