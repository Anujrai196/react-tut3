import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';


class Button extends React.Component{
    state={
        name:'Anuj',
        status:'coder'
    }
    handlest(){
        this.setState({
            name:'subham'
        })
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               {/*<Text style={{fontSize:40}}>Hello</Text>*/}
               <Text>{this.state.name}</Text>
               <Text>{this.state.status}</Text>
               <Button title='click' onPress={()=>{this.handlest}} />               
            </View>
        )
    }
}


export default Button;