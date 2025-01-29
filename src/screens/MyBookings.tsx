import { FlatList, StyleSheet, Text, View,TouchableOpacity,Button, ActivityIndicator } from 'react-native'
import React, { useEffect,useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const MyBookings = () => {
    const [hotels, setHotel] = useState([]);
    const [expandedHotelId, setExpandedHotelId] = useState(null); 
      const [flights, setFlights] = useState([]);
      const [expandedFlightId, setExpandedFlightId] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
    
    const fetchHotelData=async()=>{
        try {
            const token =await AsyncStorage.getItem("token")    
            const result = await axios.get("https://backend-flyaway-app.vercel.app/user/bookedHotels",{
                headers:{
                    token: token,
                }
            });
           
            
            setHotel(result.data.hotelData)
        return result.data
        } catch (error) {
            console.log(error);
            
        }
    }

    const fetchFlightData=async()=>{
        try {
            const token =await AsyncStorage.getItem("token")    
            const result = await axios.get("https://backend-flyaway-app.vercel.app/user/bookedFlights",{
                headers:{
                    token: token,
                }
            });
            
            
            setFlights(result.data.flightData)
        return result.data
        } catch (error) {
            console.log(error);
            
        }
    }



    const handleToggleHotelData = (id) => {
        setExpandedHotelId(expandedHotelId === id ? null : id);
      };

      const handleToggleFlight = (id) => {
        setExpandedFlightId(expandedFlightId === id ? null : id);
      };

      const handleRemove=()=>{

      }

    useEffect(()=>{
        fetchHotelData()
        fetchFlightData()
        setTimeout(() => {
            setIsLoading(false); 
          }, 2000);
    },[])

  return (
    <View style={styles.container}>
     {isLoading ? (
        <ActivityIndicator size='large' color="#0000ff" style={styles.loader} />
     ): (hotels && 
        <View>
             <Text style={styles.header}>Available Hotels</Text>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => handleToggleHotelData(item._id)} // Handle click
          >
            <Text style={styles.hotelId}>Flight ID: {item._id}</Text>
            <View style={styles.HotelDeatails}>
              <View style={styles.fromToRow}>
                <Text style={styles.bold}>{item.city}</Text>
                
               
              </View>
              <Text style={styles.detailText}>Date: <Text style={styles.bold}>{new Date(item.date).toLocaleString()}</Text></Text>
              <Text style={styles.detailText}>Passengers: <Text style={styles.bold}>{item.guests}</Text></Text>
              {expandedHotelId === item._id && (
                <View style={styles.expandedDetails}>
                  <Text style={styles.expandedText}>More details for Hotel {item._id}</Text>
                  <Button onPress={()=>handleRemove(item._id)} title="Cancel"/>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
        </View>)}

        {
         flights && 
            <View>
                <View style={styles.container}>
      <Text style={styles.header}>Available Flights</Text>
      <FlatList
        data={flights}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => handleToggleFlight(item._id)} // Handle click
          >
            <Text style={styles.flightId}>Flight ID: {item._id}</Text>
            <View style={styles.flightDetails}>
              <View style={styles.fromToRow}>
                <Text   style={styles.bold}>{item.from} ➡️ {item.to}</Text>
                
               
              </View>
              <Text style={styles.detailText}>Date: <Text style={styles.bold}>{new Date(item.date).toLocaleString()}</Text></Text>
              <Text style={styles.detailText}>Price: <Text style={styles.price}>${item.price}</Text></Text>
              <Text style={styles.detailText}>Passengers: <Text style={styles.bold}>{item.passengers}</Text></Text>
              {expandedFlightId === item._id && (
                <View style={styles.expandedDetails}>
                  <Text style={styles.expandedText}>More details for flight {item._id}</Text>
                  <Button title="Cancel"/>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
            </View>
        }
      
    </View>
  )
}

export default MyBookings

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      padding: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 16,
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    hotelId: {
      fontSize: 14,
      color: '#777',
      marginBottom: 8,
    },
    HotelDeatails: {
      marginTop: 8,
    },
    fromToRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    arrow: {
      fontSize: 20,
      color: '#333',
      marginHorizontal: 8,
    },
    verticalLine: {
      width: 2,
      height: 40,
      backgroundColor: '#333',
      marginHorizontal: 8,
    },
    detailText: {
      fontSize: 16,
      color: '#333',
      marginBottom: 4,
    },
    bold: {
      fontWeight: 'bold',
    },
    price: {
      color: '#27ae60',
      fontWeight: 'bold',
    },
    expandedDetails: {
      marginTop: 8,
      paddingTop: 8,
      paddingLeft: 12,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    expandedText: {
      fontSize: 16,
      color: '#555',
    },
    flightId: {
        fontSize: 14,
        color: '#777',
        marginBottom: 8,
      },
      flightDetails: {
        marginTop: 8,
      },
      loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
      },
  });