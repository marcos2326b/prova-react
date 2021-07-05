import React from "react"
import { View,Text,StyleSheet,TouchableOpacity,TextInput,Image,ScrollView} from "react-native"
import  Icon  from "react-native-vector-icons/FontAwesome"
import profile from "../../assets/images/profileimg.jpg"

export default props =>{
    return(
        
        <View style={styles.container}>
        <Icon name={props.name} size={30}/>
        <View style = {styles.container2}>
            <Text style={styles.texto}> 
               {props.Texto} 
            </Text>
            <Text style ={styles.texto1} >
            {props.Texto1}  
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        border:5,
        width:'100%',  
        backgroundColor:'white',
     
    },
    container2:{
        flexDirection:'column'
    },
    texto:{
        color:'#007bff',
        fontSize:28

    },
    texto1:{
        color:'#5D6B71',
        fontSize:14,
        textAlign:'right'
    }

})

