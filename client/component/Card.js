import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Card = (props) => {

    // const navigation = useNavigation();

    return(
        <TouchableOpacity
            onPress={() => {props.navigation.navigate('HomeDetails' ,
             {
              houseId : props.id
            }
            )}}
        >
            <View 
            style={styles.card}
            >
                <View 
                  style={styles.titleContainer}
                >
                    <Text style={styles.title}>
                        {props.title ? (props.title.length > 30 ? props.title.slice(0, 30) + '...' : props.title): true}                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <ImageBackground 
                      source={{ uri: props.image }} 
                      // source={require('../assets/images/house.png')}
                      style={styles.image}
                    >
                        <Text style={styles.price}>
                          { props.price }
                        </Text>
                        <View style={styles.year}>
                            <Text style={styles.yearText}>
                              { props.yearBuilt }
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.description}>
                    <Text 
                      style={styles.descriptionText}
                    >
                        {props.description ? (props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description) : true}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Card

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 5,
        height: 300,
        margin: 10
      },
      titleContainer: {
        height: '15%',
        padding: 10
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray'
      },
      imageContainer: {
        width: '100%',
        height: '65%',
        overflow: 'hidden'
      },
      image: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      },
      price: {
        fontSize: 30,
        color: '#fff',
        margin: 10
      },
      year: {
        margin: 10,
        backgroundColor: '#2652B0',
        height: 25,
        width: 80,
        borderRadius: 5
      },
      yearText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
      },
      description: {
        margin: 10
      },
      descriptionText: {
        fontSize: 16,
        color: 'gray'
      }
})