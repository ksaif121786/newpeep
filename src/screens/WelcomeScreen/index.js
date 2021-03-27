import React from "react";
import { 
  View,
  Text,
  Animated ,
  KeyboardAvoidingView,
  TouchableOpacity
  
  } from "react-native";
import { TextInput ,Button} from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2';
import styles from './styles';




const Index = ({ navigation}) => {


    const [text, setText] = React.useState('');

    
   
    return (
       
        <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
           <Text style={styles.welcomeText}>
             WELCOME
           </Text>

          
           <Button icon="" 
           color="#AFCC21"
           mode="contained"
           style={styles.button}
           onPress={() => console.log('Pressed')}>
           <Text 
             style={{color:"#7F3F7D",fontSize:30}}
            >
          JOIN NOW
          </Text>
          </Button>
          
          <TouchableOpacity>
            Already a user
          </TouchableOpacity>

        </KeyboardAvoidingView>
        </View>
        
    );
};

export default Index;
