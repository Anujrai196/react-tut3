import React from 'react';
import { StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';

class First extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}>Hello Anuj</Text>
            </View>
        )
    }
}


export default First;

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff1",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:40
    }
})
