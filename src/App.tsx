import React, { useEffect,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import StickyFooterLayout from './footer/stikyfooter';
import FlightSerach from './screens/FlightSerach';
import FlightDetails from './screens/FlightDetails';
import HotelSearch from './screens/HotelSearch';
import HotelDetails from './screens/HotelDetails';
import { configureStore } from '@reduxjs/toolkit';
import authReducer, {addToken, } from "./authSlice"
import { Provider,useSelector,useDispatch } from 'react-redux';
import Auth from './screens/Auth';
import Profile from './screens/Profile';
import MyBookings from './screens/MyBookings';
import { ActivityIndicator,StyleSheet } from 'react-native';

const stack = createNativeStackNavigator()

const store = configureStore({
  reducer:{
    user: authReducer
  }
})

function App(): React.JSX.Element {
  const token = useSelector(state=>state.user.token)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    dispatch(addToken())
   
  },[])

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 3500);
  },[])

    return(
      <>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" style={styles.loader} /> :  token ?
       
        <NavigationContainer>
          <StickyFooterLayout>
        <stack.Navigator initialRouteName="home">
          <stack.Screen 
          name='home'
          component={HomeScreens}

          />
          <stack.Screen 
          name='flightsearch'
          component={FlightSerach}
          />

        <stack.Screen 
        name='flightDetails'
        component={FlightDetails}
        />

        <stack.Screen
        name='hotelSerach'
        component={HotelSearch}
        />

        <stack.Screen
        name='hotelDetails'
        component={HotelDetails}
        />

        <stack.Screen
        name='profile'
        component={Profile}
        />

        <stack.Screen
        name='Mybookings'
        component={MyBookings}
        />
        
        </stack.Navigator>
        </StickyFooterLayout>
      </NavigationContainer>
       
      : <Auth/>}
      </>
    )
}




export default ()=>{
  return(
<Provider store={store}>

          <App/>
      
</Provider>
  )
};


const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
 
});