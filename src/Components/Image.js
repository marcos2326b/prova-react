import React from "react"
import { View,Text,StyleSheet,Button,Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Header from "../Components/Header"
import Cardft from "../Components/Cardft"


export default props =>{
    return(
       <View>
           <Image source = {props.name}/>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})
