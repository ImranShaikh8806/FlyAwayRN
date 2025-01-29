import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const HotelSearch = ({navigation}) => {
    const [city,setCity] = useState("")
    const [guests,setGuests] = useState("")
    const [date,setDate] = useState("")
    
  return (
    <View style={styles.container}>
        <View style={styles.form_area}>
            <Text style={styles.title}>SIGN UP</Text>
            <View style={styles.form_group}>
                <Text style={styles.sub_title}>City</Text>
                <TextInput
                style={styles.form_style}
                placeholder='City'
                value={city}
                onChangeText={setCity}
                />
            </View>
            <View style={styles.form_group}>
                <Text style={styles.sub_title}>Guests</Text>
                <TextInput
                style={styles.form_style}
                placeholder='Guests'
                value={guests}
                onChangeText={setGuests}
                />
            </View>
            <View style={[styles.form_group,{marginBottom:38}]}>
                <Text style={styles.sub_title}>Date</Text>
                <TextInput
                style={styles.form_style}
                placeholder='Date'
                value={date}
                onChangeText={setDate}
                />
            </View>
           
        </View>
     <View style={styles.btn} >
     <Button onPress={()=>navigation.navigate("hotelDetails",{city})} color="#DE5499" title='Search'/>
     </View>
    </View>
  )
}

export default HotelSearch

const styles = StyleSheet.create({
    container :{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginTop:30
      },
      form_area :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        backgroundColor: "#EDDCD9",
        height: "auto",
        width: "auto",
        borderWidth: 2, 
        borderColor  : "#264143",
        borderRadius: 20,
        boxShadow: "3 4 0 1 #E99F4C",
        
      },
      title : {
        color: "#264143",
        fontWeight: 900,
        fontSize: 1.5,
        
      },
      sub_title: {
        fontWeight: 600,
        margin: 5,
        
      },
      form_group :{
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        margin: 10,
        
      },
      form_style :{
        
        borderWidth: 2, 
        borderColor:"#264143",
        boxShadow: "3 4 0 1 #E99F4C",
        width: 290, 
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        fontSize: 15,
      },
      btn: {
        padding: 15,
        marginVertical: 25,
        marginHorizontal: 0,
        width: 290,
        fontSize: 15,
        backgroundColor: "#DE5499",
        borderRadius: 10,
        fontWeight: 800,
        boxShadow: "3 3 0 0 #E99F4C"
      },
      link: {
        fontWeight: 800,
        color:"#264143",
        padding: 5
      }
    
})