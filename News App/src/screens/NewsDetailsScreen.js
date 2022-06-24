import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialIcons} from '@expo/vector-icons'
import * as newsAction from './../redux/actions/newsActions'

const NewsDetailsScreen = props => {

  const dispatch = useDispatch()
  
  const {articleUrl} = props.route.params
  const article = useSelector(state => state.news.articles.articles.find(article=> article.url === articleUrl) )

  const isFave = useSelector(state=> state.news.favorites.some(article => article.url === article.url))

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>
          {article.title}
        </Text>
      </View>
      <View>
        <ImageBackground source={{ uri: article.urlToImage}} style={styles.image}>
          <View style={styles.titleContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <MaterialIcons 
                name={ isFave ? 'favorite' : 'favorite-border'} 
                size={24} 
                color="#5BB6D7"
                onPress={() =>{
                  dispatch(newsAction.toggleFavorites(article.url))
                }}
              />
          </View>
        </ImageBackground>
      </View>
      <View styles={styles.description}>
        <Text style={styles.description.text}>
          {article.description}
        </Text>
      </View>
    </View>
  )
}

export default NewsDetailsScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginVertical: 20
    },
    heading: {
      marginHorizontal: 20,
      marginBottom: 10
    },
    title: {
      // fontFamily: 'Ubuntu-Bold',
      fontSize: 24
    },
    image: {
      width: '100%',
      height: 200,
      justifyContent: 'flex-end'
    },
    titleContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    author: {
      // fontFamily: 'Ubuntu',
      fontSize: 20,
      color: 'white'
    },
    description: {
      margin: 10
    },
    descriptionText: {
      fontSize: 20,
      fontFamily: 'Ubuntu'
    }
});
