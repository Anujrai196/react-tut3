import React from 'react';
import { StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';

class Style extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1,backgroundColor:"#f1f"}}>
                    <Text style={styles.text}>Hello Anuj</Text>
                </View>
                <Text style={styles.text}>Hello Anuj</Text>
            </View>
        )
    }
}


export default Style;

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
