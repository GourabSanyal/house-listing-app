import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as newsAction from '../redux/actions/newsActions'

const { width, height } = Dimensions.get('window');


const Card = props => {
  // console.log(props)

  const dispatch = useDispatch()

  //function to use to add and remoce items from favorites, where we map the state and the article inside the state
  const isFave = useSelector(state=> state.news.favorites.some(article => article.url === props.url))

  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('NewsDetails',{
        articleUrl: props.url
      })
    }}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
            <Image 
              source={{ uri : props.image ? props.image : 'Loading image..' }}
              style={styles.image}
              />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {props.title && props.title.length > 30 ? props.title.slice(0, 30) + '...' : props.title}
          </Text>
          <MaterialIcons 
            name={ isFave ? 'favorite' : 'favorite-border'} 
            size={24} 
            color="#5BB6D7" 
            style={styles.favIcon}
            onPress={() =>{
              dispatch(newsAction.toggleFavorites(props.url))
            }}
          />
        </View>
        <View style={styles.descriptioWrapper}>
          <Text style={styles.description}>
            {props.description && props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#ffffff',
        height: 300,
        margin:20,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{ width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper:{
        width: '100%',
        height:'60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    titleWrapper:{
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        marginTop: 10,
    },
    descriptioWrapper:{
        paddingHorizontal: 15
    },
    favIcon:{
        paddingRight: width * 0.009
    },
    title:{
        fontSize:18,
        height: '110%',
        width:'100%'
    },
    description:{
        marginTop: 10
    },
    image:{
        height:'100%',
        width:'100%'
    }

})
export default Card