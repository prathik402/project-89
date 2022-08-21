import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

import CreatePost from '../screens/CreatePost';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
        >
          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen name="CreatePost"component={CreatePost}/>
        </Stack.Navigator>
    )
}