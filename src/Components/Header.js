import React from "react"
import { View,Text,StyleSheet,TouchableOpacity,TextInput,Image} from "react-native"
import  Icon  from "react-native-vector-icons/FontAwesome"
import profile from "../../assets/images/profileimg.jpg"

export default props =>{
    return(
        <View style={styles.container}>
           <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
               <Icon name='bars' size={30}/>
           </TouchableOpacity>
           <View style={styles.container1}>
					<TextInput placeholder="Search Here..." style={styles.input} />
					<TouchableOpacity>
						<Icon name='search' size={20} style={styles.icon} />
					</TouchableOpacity>
				</View>
                <Image style={styles.img} source = {profile}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        width:'100%'
    },

    container1:{
		width:'70%',
		flexDirection:'row',
		height:30,
		justifyContent:'center',
		backgroundColor: '#eee',
		borderRadius: 8,
		
	},
    input: {
		backgroundColor: '#eee',
		flex:1,	
        padding:10
	},
    icon:{
		backgroundColor: '#FBF5D4',
		marginTop:3,
	},
    img:{
        width:30,
		height: 27,
	    marginBottom: 20,
		paddingHorizontal:10
    }

})