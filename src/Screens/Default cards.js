import React from "react"
import { View,Text,StyleSheet,Button,Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Header from "../Components/Header"
import Cardft from "../Components/Cardft"
import Cart from '../../assets/images/cart.jpg'
import Template2 from '../../assets/images/template2.jpg'
import Dashboard from '../../assets/images/dashboard.jpg'


export default props =>{
    return(
        <ScrollView>
        <View style={styles.container}>
             <Header navigation={props.navigation}/>
             <View>
                 <Cardft titulo = 'Card Columns'/>
                 <Image  style={styles.img} source ={Cart} />
                 <Cardft textop = "Card Title Wraps to a new line" 
                 texto = "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer" />
             </View>
             <View>
                 <Cardft titulo = 'Card Columns'/>
                 <Image  style={styles.img} source ={Template2}/>
                 <Cardft textop = "Card Title Wraps to a new line" 
                 texto = "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer" />
             </View>
             <View>
                 <Cardft titulo = 'Card Columns'/>
                 <Image  style={styles.img} source ={Dashboard} />
                 <Cardft textop = "Card Title Wraps to a new line" 
                 texto = "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer" />
             </View>
             <View>
                 <Cardft titulo = 'Card Columns'/>
                 <Image  style={styles.img} source ={Template2} />
                 <Cardft textop = "Card Title Wraps to a new line" 
                 texto = "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer" />
             </View>
             <View>
                 <Cardft titulo = 'Card Columns'/>
                 <Image  style={styles.img} source ={Cart} />
                 <Cardft textop = "Card Title Wraps to a new line" 
                 texto = "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer" />
             </View>
             <View>
                 <Cardft titulo = 'Card Columns'/>
                 <Image  style={styles.img} source ={Cart} />
                 <Cardft textop = "Card Title Wraps to a new line" 
                 texto = "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer" />
             </View>
             <View>
                 <Cardft titulo = 'Card Columns'/>
                 <Image  style={styles.img} source ={Cart} />
                 <Cardft textop = "Card Title Wraps to a new line" 
                 texto = "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer" />
             </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    img:{
        width:300,
		height: 200
    }
})


/* 

<Button title='ir para tela2 ' onPress={()=>props.navigation.navigate('Tela2')}  />
<Button title='ir pra home' onPress={()=>props.navigation.navigate('Home')}  /> */