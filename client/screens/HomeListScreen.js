// Dependencies and libraries
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

//components
import Card from '../component/Card';
import { FloatingAction } from "react-native-floating-action";
import * as houseAction from '../redux/actions/houseAction.js';

const HomeListScreen = ({ navigation, props }) => {

  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch();

  const {houses} = useSelector((state) => state.house);

  // console.log("start")
  // console.log('data from Home list ---->', houses)
  // console.log("Done")

  useEffect(() => {
    setIsLoading(true)
    dispatch(houseAction.fetchHouses())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }, [dispatch]);
    
    if (isLoading) {
        return(
            <View style={styles.centered}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    if (houses.length === 0 && !isLoading) {
      return(
        <View>
          <Text>
            No home found. You could add one!
          </Text>
        </View>
      )
    }

  return (
    <View style={styles.container}>
      <FlatList 
        data={houses}
        keyExtractor={item=>item._id}
        renderItem={({ item }) => (
          <Card
            navigation={navigation}
            title={item.title}
            address={item.address}
            homeType={item.homeType}
            description={item.description}
            price={item.price}
            image={item.image}
            yearBuilt={item.yearBuilt}
            id={item._id}
          />
        )}
        // extraData={houses.address}
      />
         {/* <Card 
            navigation={navigation}
            // title={item.title}

          /> */}
      
      <FloatingAction
        position="right"
        onPressMain={() =>{navigation.navigate('AddHome')}}
        // animated={false}
        showBackground={false}
      />
    </View>
    //   <View >
  //     <FlatList
  //       data={houses}
  //       keyExtractor={(item) => item._id}
  //       renderItem={({ item }) =>(
  //         <Card 
  //           
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
  //       
  //      
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
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
})