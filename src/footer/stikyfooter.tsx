import React from "react";
import Footer from "./Footer";
import { SafeAreaView, View,StyleSheet } from "react-native";

const StickyFooterLayout = ({children}) =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {children}
            </View>
            <View style={{marginBottom:10,paddingTop:10}}>
            <Footer />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column', 
    },
    content: {
      flex: 1, 
    },
  });
  
  export default StickyFooterLayout;