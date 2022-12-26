// Dependencies and libraries
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux';

//components
import Card from '../component/Card';
// import { FloatingAction } from "react-native-floating-action";
// import * as houseAction from '../redux/actions/houseAction.js';

const HomeListScreen = ({ navigation, props }) => {

  // const dispatch = useDispatch();

  // const {houses} = useSelector((state) => state.house);

  // console.log(houses)
  // console.log("Done")

  // useEffect(() =>{
  //   dispatch(houseAction.fetchHouses())
  // }, [dispatch])

  return (
    <View>
      <Text>
          Add Home Screen
      </Text>
    </View>
    //   <View style={styles.container}>
  //     <FlatList
  //       data={houses}
  //       keyExtractor={(item) => item._id}
  //       renderItem={({ item }) =>(
  //         <Card 
  //           navigation={navigation}
  //           title={item.title}
  //           address={item.address}
  //           hometype={item.homeType}
  //           description={item.description}
  //           price={item.price}
  //           image={item.image}
  //           yearBuiilt={item.yearBuiilt}
  //           id={item._id}
  //         />
  // )}
  //     />
  //     <FloatingAction 
  //       position="right"
  //       animated={false}
  //       showBackground={false}
  //       onPressMain={() =>{navigation.navigate('AddHome')}}
  //       style={styles.floatingButton}
  //     />
  //   </View>
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