import React from 'react';
import {StyleSheet,View,Text,TextInput,Alert,Button} from 'react-native';
import Button from './Button';

class SimpleProject extends React.Component{

    state={
        text:'loading'
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.text}</Text>
                <TextInput
                    style={{fontSize:40,height:100}}
                    placeholder="type here"
                    onChangeText={(text)=>this.setState({text:text})} 
                />
                <Button
                    title='click me !!!'
                    onPress={()=> Alert.alert("you clicked it ???")}
                /> 
               <Text style={styles.text}> CNQ !! </Text>
               
            </View>
        )
    }
}


export default SimpleProject;

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff1',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:40,
        

    }
})
