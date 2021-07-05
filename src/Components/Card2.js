import React from "react"
import { View,Text,StyleSheet,TouchableOpacity,TextInput,Image,ScrollView} from "react-native"
import  Icon  from "react-native-vector-icons/FontAwesome"
import profile from "../../assets/images/profileimg.jpg"

export default props =>{
    return(
    
        <View style={styles.container}>
             <View style={styles.container1}>
             <Text style={styles.texto1} >
                 {props.texto}
             </Text>
             </View>
             <View style= {styles.container2}>
             <Text style= {styles.texto2}>
                 {props.texto1}
             </Text>
             </View>
             

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'Collum',
        border:5,
        width:'100%',  
        backgroundColor:'white',

    },
    container1:{
        width:'100%',
        alignItems:'center',
        marginTop:10
    },
    container2:{
        width:'100%',
        alignItems:'center',
        marginTop:60,
        marginBottom:10
    },
    texto1:{
        fontSize:20,
        color:'#4755ab'
    },
    texto2:{
        color:'#6c757d',
        fontSize:16
    }


})