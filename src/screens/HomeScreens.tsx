import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import { Card } from 'react-native-elements'


const HomeScreens = ({navigation}) => {

  const hotels = [
    {
       name: 'Mumbai',
       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jsR58qj7CrcaYhuruy-Qp84ajNBiq0w2fA&s'
    },
    {
      name: 'Hyderabad',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzn8fq3ree5G91b7DoSnKhR7qfBpLXwLfiQ&s'
   },
   {
    name: 'Dubai',
    avatar: 'https://besthotelview.com/img/hotel/ae/burj-al-arab.jpg'
 },
 {
  name: 'Banglore',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVH7uzzLi6Z5qPG2DbllFhwLipBATsfJhhw&s'
},
{
  name: 'Jaipur',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4d-L-pN57ZIqSATfRql2yTRsbOD-5BuT5CA&s'
},
{
  name: 'Delhi',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmhHFdPeNLgTBel3CG_PJvVWdg1zPX4wDLQ&s'
},
   ]
   const places = [
    {
       name: 'Australia',
       avatar: 'https://d3vonci41uckcv.cloudfront.net/old-images/original/479f36af-60a7-4623-ae2e-5a7d68bbcc24.jpg'
    },
    {
      name: 'Brazil',
      avatar: 'https://www.benoitproperties.com/wp-content/uploads/2023/06/brazil-tourist-destinations-1024x545.png'
   },
   {
    name: 'Switzeland',
    avatar: 'https://admin.expatica.com/ch/wp-content/uploads/sites/9/2023/11/places-to-visit-in-switzerland.jpg'
 },
 {
  name: 'Singapore',
  avatar: 'https://www.tourmyindia.com/blog//wp-content/uploads/2017/04/Singapore-Flyer.jpg'
},
{
  name: 'Hanoi',
  avatar: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=600&h=500&s=1'
},
{
  name: 'Jakarta',
  avatar: 'https://powertraveller.com/wp-content/uploads/2024/09/3_jakarta-full-day-tour-explore-the-best-places-in-jakarta.jpg'
},
   ]

   const data = [
    { key: 'Home', icon: 'home' },
    { key: 'My Trips', icon: 'suitcase' },
    { key: 'Coupons', icon: 'tag' },
    { key: 'My Trips', icon: 'suitcase' },
    { key: 'Coupons', icon: 'tag' },
    { key: 'My Trips', icon: 'suitcase' },
    { key: 'Coupons', icon: 'tag' },
    { key: 'My Trips', icon: 'suitcase' },
    { key: 'Coupons', icon: 'tag' },
    { key: 'My Trips', icon: 'suitcase' },
    { key: 'Coupons', icon: 'tag' },
  ];


  return (
    <ScrollView style={{backgroundColor:"#e2e8f0"}}>

        <View style={styles.header}>
            <View style={{display:'flex',alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:500,color:"blue"}}>flyaway</Text>
            <View style={{display:"flex",flexDirection:"row",gap:4}}>
              <View style={{width:14,height:14,borderRadius:7,backgroundColor:"blue"}}>
              </View>
              <View style={{width:14,height:14,borderRadius:7,backgroundColor:"red"}}>
              </View>
              <View style={{width:14,height:14,borderRadius:7,backgroundColor:"yellow"}}>
              </View>
              <View style={{width:14,height:14,borderRadius:7,backgroundColor:"tomato"}}>
              </View>
            </View>
            </View>
        </View>

       <View style={styles.boxContainer}>
          <TouchableOpacity style={[styles.box,{backgroundColor:"#ffe4e6"}]} onPress={()=>navigation.navigate("hotelSerach")}>
          <View >
                <Text style={styles.boxText}>Hotels</Text>
                <Image style={styles.boxImg} source={require("../assets/hotel.png")}/>
            </View>
          </TouchableOpacity>
            <TouchableOpacity style={[styles.box,{backgroundColor:"#f5d0fe"}]} onPress={()=>navigation.navigate("flightsearch")}>
            <View>
                <Text style={styles.boxText}>Flights</Text>
                <Image style={[styles.boxImg,{resizeMode: 'contain'}]} source={require("../assets/flight.png")}/>
            </View>
            </TouchableOpacity>
         
             <View style={[styles.box,{backgroundColor:"#bae6fd"}]}>
                <Text style={styles.boxText}>Things to do</Text>
                <Image style={[styles.boxImg,{resizeMode: 'contain'}]} source={require("../assets/thingstodo.png")}/>

            </View>
            <View style={[styles.box,{backgroundColor:"#fef3c7"}]}>
                <Text style={styles.boxText}>Elplore More</Text>
                <Image style={[styles.boxImg,{resizeMode: 'contain'}]} source={require("../assets/thingstodo.png")}/>
            </View>
       </View>

       <View style={styles.container}>
       <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.key} 
      renderItem={({ item }) => (
        <View style={styles.scrollItem}>
          <Icon name={item.icon} size={25} color="blue" />
          <Text>{item.key}</Text>
        </View>
      )}
      contentContainerStyle={styles.horientalSroll}
    />
      </View>

    <View style={{marginTop:50}}>
    <View>
        <Text style={styles.title1}>Snap up these special hotel offers</Text>
        <Text style={styles.title2}>Get great prices and extra perks in these destinations</Text>
          </View>

      <View style={styles.offersContainer}>
      <ScrollView horizontal={true} contentContainerStyle={styles.horientalSroll}>
      <View style={styles.offersContainer}>
        {hotels.map((u, i) => {
          return (
            <Card key={i}>
              <Card.Image style={{width:210 }} source={{ uri: u.avatar }} />
              <Text style={styles.name}>{u.name}</Text>
            </Card>
          );
        })}
      </View>
    </ScrollView>
      </View>
    </View>

  

    <View style={{marginTop:50,marginBottom:20}}>
    <View>
        <Text style={styles.title1}>destinations up these special hotel offers</Text>
        <Text style={styles.title2}>Get great prices and extra perks in these destinations</Text>
          </View>

      <View style={styles.offersContainer}>
      <ScrollView horizontal={true} contentContainerStyle={styles.horientalSroll}>
      <View style={styles.offersContainer}>
        {places.map((u, i) => {
          return (
            <Card key={i}>
              <Card.Image style={{width:180 }} source={{ uri: u.avatar }} />
              <Text style={styles.name}>{u.name}</Text>
            </Card>
          );
        })}
      </View>
    </ScrollView>
      </View>
    </View>

    
    </ScrollView>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
    header:{
        display:'flex', 
        flexDirection:"row", 
        justifyContent:"space-between",
         paddingHorizontal:20, 
         paddingVertical:8,
          alignItems:"center"
    },
    headerImg:{
        height:50,
        width:50,
        borderRadius:25
    },
    boxContainer:{
        flexDirection:"row",
        paddingHorizontal:4,
        justifyContent:"space-around",
        flex:1,
        
    },
    box:{
        height:100,
        padding:10,
        flex:1,
        marginHorizontal:5,
        borderRadius:20,
        alignItems:"center",
        flexDirection: "column",
        
        
    },
    boxImg:{
        height:80,
        width:80,
        
    },
    boxText:{
        fontSize:14,
        color:"black",
        fontWeight:500,
        textAlign:"center"
    },
    horientalSroll:{
      display:"flex",
      flexDirection:"row",
      
      marginHorizontal:10,
      borderColor:"grey",
      borderWidth:1,
      borderRadius:10,
      marginTop:20
    },
    scrollItem: {
      alignItems: 'center',
      marginHorizontal: 10,
      paddingHorizontal:10,
      
    },
    container: {
      marginHorizontal:10,
      backgroundColor:"white",
      borderRadius:20,
      height:100,
      marginTop:20
    },
   
    title1: { 
      width: "100%",
      fontSize: 20,
      fontWeight: 600,
      marginLeft:20,
      marginBottom:4
    },
    title2: { 
      width: "100%",
      fontSize: 18,
      fontWeight: 400,
      marginLeft:20,
      
    },
    offersContainer:{
      flexDirection:"row",
      marginTop:-11,
      marginBottom:7
    },
    name: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
})