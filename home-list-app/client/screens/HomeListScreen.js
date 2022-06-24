import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//components
import Card from '../component/Card';
import { FloatingAction } from "react-native-floating-action";

const HomeListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card 
        navigation={navigation}
      />
      <FloatingAction 
        position="right"
        animated={false}
        showBackground={false}
        onPressMain={() =>{navigation.navigate('AddHome')}}
        style={styles.floatingButton}
      />
    </View>
  )
}

export default HomeListScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  floatingButton:{
    marginTop: '80px'
  }
})