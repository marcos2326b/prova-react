import React from "react"
import { View,Text,StyleSheet,TouchableOpacity,TextInput,Image,ScrollView} from "react-native"
import  Icon  from "react-native-vector-icons/FontAwesome"
import profile from "../../assets/images/profileimg.jpg"

export default props =>{
    return(
    
        <View style={styles.container}>
          <Text>{props.name}/{props.name1} </Text>
            <View><Text style={styles.text}>{props.name2}</Text></View>
            <View><Text>{props.name3}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',  
    },
    text:{
        fontSize:24
    }
})