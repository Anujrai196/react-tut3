import React,{ component } from 'react';
import {AppRegistry,StyleSheet,ScrollView,View,Text,Image} from 'react-native';

class Design extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <Image 
                        source={require('./image/two.png')}
                    />
                    <Text>
                        <Text style={styles.text}>Code with  </Text>
                        <Text style={{color:'#3e3f8f',fontSize:40,fontWeight:"bold"}}>Hemant</Text>
                    </Text>
                </View>
            </View>
        )
    }
}


export default Design;

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eeeef1",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:40,
        color:'#3b363a',
        fontWeight:'bold'

    }
})
AppRegistry.registerComponent('Rohit',()=>Rohit);