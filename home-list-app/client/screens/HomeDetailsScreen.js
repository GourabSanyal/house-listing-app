import { ScrollView, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const HomeDetailsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Modern Bedroom</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/house.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Home Type: </Text>
          <Text style={styles.value}>Flat</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Price: </Text>
          <Text style={styles.value}>$200,000</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Year Build</Text>
          <Text style={styles.value}>2022</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>This is the address</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>This is the description</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeDetailsScreen

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
    fontSize: 24
  },
  image: {
    width: '100%',
    height: 200
  },
  group: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row'
  },
  label: {
    fontSize: 18
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1
  }
})