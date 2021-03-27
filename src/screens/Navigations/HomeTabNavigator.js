import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';




import HomeScreen from '../HomeScreen';
import ProfileDetailsScreen from '../ProfileDetailsScreen';


const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
    return (
     <Tab.Navigator
    
     tabBarOptions={{
        activeTintColor: '#803E7A',
        style:{
          backgroundColor:"#C3E638"
        },
        showLabel:false
      
      }}>
      <Tab.Screen name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon:({color}) =>(
          <Entypo name="home"  size={30} color={color}/>
        )
      }}
      />

      <Tab.Screen name="Blogs" 
      component={HomeScreen}
      options={{
        tabBarIcon:({color}) =>(
          <Entypo name="images" size={30} color={color}/>
        )
      }}
      />
      <Tab.Screen name="Profile Details" 
      component={ProfileDetailsScreen} 
      options={{
      tabBarIcon:({color}) =>(
       <FontAwesome name="user" size={30} color={color}/>
      )
      }}
      />
     </Tab.Navigator>
    );
};

export default HomeTabNavigator;
