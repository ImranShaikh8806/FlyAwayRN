import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import FontAwesome from 'react-native-vector-icons/FontAwesome6';


const Footer = () => {
  return (
    <View>
      <View style={styles.container}>

<View>
  <Icon name="home" size={25} color="blue"/>
  <Text>Home</Text> 
</View>

<View>
<Icon name="suitcase" size={25} color="blue"/>
  <Text>My Trips</Text>
</View>

<View>
<Icon name="tag" size={25} color="blue"/>
<Text>Coupens</Text>
</View>

<View>
<Icon name="shopping-cart" size={25} color="blue"/>
<Text>Cart</Text>
</View>

<View>
<Icon name="user" size={25} color="blue"/>
<Text>More</Text>
</View>

</View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    
  }
})