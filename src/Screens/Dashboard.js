import React from "react"
import { View,Text,StyleSheet,Button, ScrollView } from "react-native"
import Constants from 'expo-constants'
import Card from '../Components/Card'
import Card2 from "../Components/Card2"
import Titulo from "../Components/Titulo"

import Header from "../Components/Header"

export default props =>{
    return(
    <ScrollView style={styles.container}>
        <View style={styles.container1}>
            <Header navigation={props.navigation}/> 
        </View>
        <View style={styles.titulo}>
        <Titulo 
        name= 'Home' 
        name1= 'Dashboard' 
        name2= 'Hi John, Welcome back' 
        name3= 'Very detailed featured admin' />
        </View>
        <View style={styles.container2} > 
        <View style ={styles.cards}><Card Texto = '29.75 M' Texto1 = 'Total Users' name ='user'/></View>
        <View style ={styles.cards}><Card Texto = '51.25 M' Texto1 = 'Daily Visitors' name = 'eye'/></View>
        <View style ={styles.cards}><Card Texto = '29.75 M' Texto1 = 'Download' name = 'cloud'/></View>
        <View style ={styles.cards}><Card Texto = '29.75 M' Texto1 = 'Purchased'name = 'shopping-cart'/></View>
        <View style={styles.cards}><Card2 texto= 'Bar Chat' texto1 = 'Update 2 hours ago'  /></View> 
        <View style={styles.cards}><Card2 texto= 'Line Chart' texto1 = 'Update just now'  /></View>  
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'#eff1f9',
    },
    container1:{
        backgroundColor:'white'
    },
    container2:{
        marginTop:40,
        paddingHorizontal:10
    },
    cards:{
        marginTop:20
    },
    titulo:{
        marginHorizontal:27
    }
})