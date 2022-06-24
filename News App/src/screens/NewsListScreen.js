import { StyleSheet, FlatList, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Card from '../components/Card'

// useSelector is used to select data from our state
// useDispatch is used to dispatch actions
import { useSelector, useDispatch } from 'react-redux';
import * as newsAction from '../redux/actions/newsActions';
import { TouchableHighlight } from 'react-native';
import { createFactory } from 'react';

const NewsListScreen = props => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newsAction.fetchArticles())
  },  [dispatch] );

const articles = useSelector(state => state.news.articles);
    // console.log(articles)

  return (
    <FlatList
      data={articles.articles}
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

const styles = StyleSheet.create({});

export default NewsListScreen
