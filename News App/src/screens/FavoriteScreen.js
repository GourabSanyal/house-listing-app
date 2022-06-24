import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const FavoritesScreen = props => {
  const favorites = useSelector(state => state.news.favorites);
  
  return (
    <FlatList
    data={favorites}
    keyExtractor={(item) => item.url}
    renderItem={({item}) => (
        <Card 
          navigation={props.navigation}
          title={item.title}
          image={item.urlToImage}
          description={item.description}
          url={item.url}
        />
    )}
/>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})