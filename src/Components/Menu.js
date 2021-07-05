import React from "react"
import { View,Text,StyleSheet,ScrollView} from "react-native"
import { DrawerItems } from "react-navigation-drawer"

export default props =>{
    return(
        <ScrollView>
            <View style= {styles.container}>
                <Text style = {styles.text}>COLLECTIVE</Text>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
       width:'100%',
       backgroundColor:'#4755ab',
       height:50,
       padding:5
    },
    text:{
        fontSize:40,
        color:'white',
        fontWeight:800

    }
})