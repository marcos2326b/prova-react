import React from "react"
import { View,Text,StyleSheet,Button } from "react-native"
import Header from "../Components/Header"


export default props =>{
   
    return(
        <View style={styles.container}>
             <Header navigation={props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})