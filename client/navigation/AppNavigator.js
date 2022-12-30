// Libraries and dependencies
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View } from 'react-native';

// Screens
import AboutScreen from "../screens/AboutScreen";
import AddHomeScreen from "../screens/AddHomeScreen";
import HomeDetailsScreen from "../screens/HomeDetailsScreen";
import HomeListScreen from "../screens/HomeListScreen"

// assets
import { MaterialIcons, Ionicons  } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeList"
                component={HomeListScreen}
                // options={{title: 'HomeHunt'}}
            />
            <Stack.Screen
                name="HomeDetails"
                component={HomeDetailsScreen}
            />
            <Stack.Screen
                name="AddHome"
                component={AddHomeScreen}
            />
        
        </Stack.Navigator>
    )
}

function AboutStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About Screen" component={AboutScreen}/>
        </Stack.Navigator>
    )
}

function AppsNavigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home-sharp'
                      : 'home-outline';
                  } else if (route.name === 'About') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons  name={iconName} size={29} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={StackNavigator} 
                /> 
                <Tab.Screen 
                    name = "About" 
                    component = {AboutStackNavigator}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
} 

// function AboutStackNavigator(){
//     return(
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="About"
//                 component={AboutScreen}
//             />
//         </Stack.Navigator>
//     )
// }

// function AppNavigator() {
//     return(
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({route}) =>{
//                     tabBarIcon: () =>{
//                         let iconName;
//                         if (route.name == "Home"){
//                             iconName = "home"
//                         } else if (iconName == "About"){
//                             iconName = "info"
//                         }
//                         return (<`MaterialIcons`
//                             name = {iconName}
//                             size = {24}
//                         />)
//                     }}}
//             >
//                 <Tab.Screen
//                     name='Home'
//                     component={StackNavigator}
//                     />
//                 <Tab.Screen
//                     name="About"
//                     component={AboutStackNavigator}
//                     />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }

export default AppsNavigator;