// Libraries and dependencies
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import AboutScreen from "../screens/AboutScreen";
import AddHomeScreen from "../screens/AddHomeScreen";
import HomeDetailsScreen from "../screens/HomeDetailsScreen";
import HomeListScreen from "../screens/HomeListScreen"

// assets
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeList"
                component={HomeListScreen}
                options={{title: 'HomeHunt'}}
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

function AboutStackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={AboutScreen}
            />
        </Stack.Navigator>
    )
}

function AppNavigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) =>{
                    tabBarIcon: () =>{
                        let iconName;
                        if (route.name == "Home"){
                            iconName = "home"
                        } else if (iconName == "About"){
                            iconName = "info"
                        }
                        return (<MaterialIcons
                            name = {iconName}
                            size = {24}
                        />)
                    }}}
            >
                <Tab.Screen
                    name='Home'
                    component={StackNavigator}
                    />
                <Tab.Screen
                    name="About"
                    component={AboutStackNavigator}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;