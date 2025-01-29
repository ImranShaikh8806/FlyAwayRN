import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import { useNavigation } from '@react-navigation/native';


const Footer = () => {
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState("home");

    const handlePress = (tabName:string)=>{
        setActiveTab(tabName)

      if(tabName=="home"){
        navigation.navigate("home")
      }else if (tabName === "profile") {
        navigation.navigate("profile"); 
      } 
    }

  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <TouchableOpacity onPress={()=>handlePress("home")}>
        <Icon name="home" size={25} color={activeTab == "home" ? "#38bdf8" : "gray"}/>
        <Text>Home</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.box}>
      <Icon name="suitcase" size={25} color="gray"/>
        <Text>My Trips</Text>
      </View>

      <View style={styles.box}> 
      <Icon name="tag" size={25} color="gray"/>
      <Text>Coupens</Text>
      </View>

      <View style={styles.box}>
      <Icon name="shopping-cart" size={25} color="gray"/>
      <Text>Cart</Text>
      </View>

      <TouchableOpacity onPress={()=>handlePress("profile")}>
      <View style={styles.box} >
      <Icon name="user" size={25} color={activeTab == "profile" ? "#38bdf8" : "gray"}/>
      <Text>More</Text>
      </View>
      </TouchableOpacity>

    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
  },
  box:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
})