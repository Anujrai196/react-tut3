import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

class Layout extends React.Component{
    render(){
        return(
            <View style={styles.container}>
               <Text style={styles.text}>Hello Sir </Text>
               <Text style={styles.text}>Hello Sir </Text>
               <Text style={styles.text}>Hello Sir </Text>
               
            </View>
        )
    }
}


export default Layout;

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff1',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:40,
        height:100,
        borderWidth:3,
        backgroundColor:'orange',
        textAlign:'center',
        padding:10,
        marginTop:20,

    }
})
