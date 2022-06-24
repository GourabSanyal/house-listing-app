import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from '@react-navigation/drawer'

import NewsListScreen from "../screens/NewsListScreen";
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import FavoritesScreen from '../screens/FavoriteScreen';
import AboutScreen from '../screens/AboutScreen';

import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () =>{
    const navigation = useNavigation()

    return(
        <MaterialIcons name='menu' size={24} onPress={() => {navigation.openDrawer()}} />
    )
}

function HomeNavigator(){
    return(
        <Stack.Navigator
            // screenOptions={{
            //     headerLeft: ()=> <HeaderLeft />
            // }}
        >
                <Stack.Screen 
                    name="NewsList" 
                    component={NewsListScreen}
                    options={{ title: "All News", headerLeft: () =><HeaderLeft /> }}
                />
                <Stack.Screen 
                    name="NewsDetails" 
                    component={NewsDetailsScreen}
                    options={{ title: "News Details" }}
                />
        </Stack.Navigator>
    )
}


function FavoritesNavigator() {
    return(
         <Stack.Navigator
         screenOptions={{
            headerLeft: ()=> <HeaderLeft />}}
         >
             <Stack.Screen name="Favorites" component={FavoritesScreen} />
         </Stack.Navigator>
    )
}

function AboutNavigator() {
    return(
         <Stack.Navigator 
         screenOptions={{
            headerLeft: ()=> <HeaderLeft />}}
         >
             <Stack.Screen name="About" component={AboutScreen} />
         </Stack.Navigator>
    )
}

// function TabsNavigator() {
//     return(
//         <Tabs.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: () =>{
//                         let iconName;
//                         if( route.name === "Home") {
//                             iconName="home"
//                         } else if ( route.name == "Favorites" ) {
//                             iconName="favorite"
//                         }
//                         return <MaterialIcons name={iconName} size={24} />
//                     }
//                 })}
//             >
//                 <Tabs.Screen 
//                     name='Home' 
//                     component={HomeNavigator}
//                     options={{title:''}}    
//                 />
//                 <Tabs.Screen 
//                     name='Favorites' 
//                     component={FavoritesNavigator}
//                     options={{title:''}}
//                 />
//             </Tabs.Navigator>
//     )
// }

// add tabnicons using screenOptions

function AppNavigator() {
    return( 
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                    name='Home'
                    component={HomeNavigator}
                />
                <Drawer.Screen 
                    name='About'
                    component={AboutNavigator}
                />
                <Drawer.Screen 
                    name='Favorites'
                    component={FavoritesNavigator}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;