import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HotelDeatails = ({ route }) => {
  const { city } = route.params;
  const [hotels, setHotel] = useState([]);
  const [expandedHotelId, setExpandedHotelId] = useState(null); 
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://backend-flyaway-app.vercel.app/hotels/preview", {
        params: { city }
      });
      setHotel(response.data.hotels);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  const handleToggleHotelData = (id) => {
    // Toggle flight details visibility
    setExpandedHotelId(expandedHotelId === id ? null : id);
  };

  
    const handleBook = async (hotelId) => {
      try {
        const token = await AsyncStorage.getItem("token");
        console.log("Token:", token);
    
        const response = await axios.post(
          "https://backend-flyaway-app.vercel.app/hotels/book",
          {
            hotelId: hotelId,  
          },
          {
            headers: {
              token: token,  
            }
          }
        );
    
        Alert.alert("Booking Successful", response.data.message);
        console.log(response.data);
      } catch (error) {
        console.error("Error booking hotel:", error);
        Alert.alert("Error", "Failed to book the hotel");
      }
    };
    

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Hotels</Text>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => handleToggleHotelData(item._id)} 
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
                  <Button onPress={()=>handleBook(item._id)} title="Book"/>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

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
});

export default HotelDeatails;
