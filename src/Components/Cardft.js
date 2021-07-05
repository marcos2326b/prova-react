import React from "react"
import { View,Text,StyleSheet,Button, Image} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Header from "./Header"


export default props =>{
    return(
        <View>
            <Text>{props.titulo}</Text>
            <View>
                <Text>
                    {props.textp}
                    {props.texto}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },

    Image:{
        width:40
    }
})
