import React from "react";
import {NavigationContainer, StackActions} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabNavigator from './HomeTabNavigator';
import RegisterScreen from '../RegisterScreen';
import ProfileScreen from '../ProfileScreen';
import HomeScreen from '../HomeScreen';
import WelcomeScreen from '../WelcomeScreen';
import MyFriendScreen from '../MyfriendScreen';
import InboxScreen from '../InboxScreen';
import OnlineUserScreen from '../OnlineUserScreen';
import BigpinboardScreen from '../BigpinboardScreen';
import ShopScreen from '../ShopScreen';
import NewsScreen from '../NewsScreen';
import RecentVisiterScreen from '../RecentVisiterScreen';
import UserProfileScreen from '../UserProfileScreen';
import ChatScreen  from '../ChatScreen';
import NewsDetailScreen from '../NewsDetailScreen';


const Stack = createStackNavigator();

const Router = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator>

      {/* <Stack.Screen
          name={"Welcome"}
          component={WelcomeScreen}
          options={{
            // headerShown: false,
          }}
        /> */}

      

        <Stack.Screen
          name={"Register"}
          component={RegisterScreen}
          options={{
            // headerShown: false,
          }}
        />

       <Stack.Screen
          name={"Profile"}
          component={ProfileScreen}
          options={{
            // headerShown: false,
          }}
        />   

       <Stack.Screen
        name={"My Friends"}
        component={MyFriendScreen}
        options={{ }}
        /> 

       <Stack.Screen
        name={"User Profile"}
        component={UserProfileScreen}
        options={({route}) => ({ title:route.params.username+'\'s profile  '})}
        /> 

    <Stack.Screen
        name={"New PMS"}
        component={InboxScreen}
        options={{ }}
        /> 

<Stack.Screen
        name={"Online Peepers"}
        component={OnlineUserScreen}
        options={{ }}
        /> 


<Stack.Screen
        name={"Big Pinboard"}
        component={BigpinboardScreen}
        options={{ }}
        /> 


<Stack.Screen
        name={"Shop"}
        component={ShopScreen}
        options={{ }}
        /> 


<Stack.Screen
        name={"P News"}
        component={NewsScreen}
        options={{ }}
        /> 


<Stack.Screen
        name={"Recent Visiters"}
        component={RecentVisiterScreen}
        options={{ }}
        /> 

      
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

       <Stack.Screen
        name={"Chat"}
        component={ChatScreen}
        options={{
          
        }}/>

        <Stack.Screen
        name={"News details"}
        component={NewsDetailScreen}
        options={{}}/>

       

    </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Router;
