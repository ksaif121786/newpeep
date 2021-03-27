import React from "react";
import { View,Text,ScrollView,KeyboardAvoidingView } from "react-native";
import {Avatar,TextInput,Button} from 'react-native-paper';
import { Icon } from 'react-native-elements';
import styles from './styles';

const Index = () => {
    return (
        <View style={styles.container}> 
          
          <View style={{height:'88%'}}>
          <KeyboardAvoidingView behavior='position'>
            <ScrollView>
            <View style={{flexDirection:'row', marginTop:8}}>

                <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >Hi, Saif </Text>
                </View>
            </View>


        

            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >How are you </Text>
                </View>
            </View>


            



            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >What are you doing... </Text>
                </View>
            </View>








            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>


           

            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>


            
            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>
            

            <View style={{flexDirection:'row', 
            marginTop:8,
            justifyContent:'flex-end'}}>
               
                <View style={styles.messageWrapRight}>  
                <Text
                style={{fontSize:15}}
                >Good Good my TOPPER </Text>
                </View>

                <View>
                {/* <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                /> */}
                
                </View>
            </View>

            
            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>

            

            <View style={{flexDirection:'row', 
            marginTop:8,
            justifyContent:'flex-end'}}>
               
                <View style={styles.messageWrapRight}>  
                <Text
                style={{fontSize:15}}
                >Good Good my TOPPER </Text>
                </View>

                <View>
                {/* <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                /> */}
                
                </View>
            </View>


          


            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>


            

            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>


            <View style={{flexDirection:'row', 
            marginTop:8,
            justifyContent:'flex-end'}}>
               
                <View style={styles.messageWrapRight}>  
                <Text
                style={{fontSize:15}}
                >Good Good my TOPPER </Text>
                </View>

                <View>
                {/* <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                /> */}
                
                </View>
            </View>


            


            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>


           



            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>

            <View style={{flexDirection:'row', 
            marginTop:8,
            justifyContent:'flex-end'}}>
               
                <View style={styles.messageWrapRight}>  
                <Text
                style={{fontSize:15}}
                >Good Good my TOPPER </Text>
                </View>

                <View>
                {/* <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                /> */}
                
                </View>
            </View>






            <View style={{flexDirection:'row', marginTop:8}}>
            <View>
                <Avatar.Image 
                size={45}  
                source={require('../../../assets/users/1.png')} 
                />
                
                </View>
                <View style={styles.messageWrapLeft}>  
                <Text
                style={{fontSize:15}}
                >I am studying </Text>
                </View>
            </View>


            
            

            </ScrollView>
            </KeyboardAvoidingView>
            </View>
            
            
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <TextInput
                label=""
                value=""
                onChangeText={()=>console.log('ok')}
                theme={{colors:{primary:'blue'}}}
                mode="outlined"
                // multiline={true}
                numberOfLines={1}
                style={styles.sendMsg}
             />
              {/* <Button icon="start" style={styles.button} mode="contained" onPress={() => navigation.navigate('Profile')}>
                
            </Button> */}
            <Icon
            name='sc-telegram'
            type='evilicon'
            color='#517fa4'
            size={50}
            />
             </View>



            


        </View>
    );
};

export default Index;
