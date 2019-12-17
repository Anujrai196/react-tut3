import React from 'react';
import {StyleSheet,View,Text,TextInput,Alert,Button,ScrollView} from 'react-native';

class Fetch extends React.Component{

    state={
        text:'loading',
        
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(data=>data.json())
        .then(data2=>{
            console.log(data2)
            this.setState({text:data2[0].name})
        })
    }

    render(){
        console.log("from render");
        // console.log(JSON.stringify(this.state.data))
        return(
            <View style={styles.container}>
                {/* <ScrollView>
                    <Text style={styles.text}>{JSON.stringify(this.state.data)}</Text>
                </ScrollView> */}
                <Text style={{fontSize:50}}>
                    {this.state.text}
                </Text>

            </View>
        )
    }
}


export default Fetch;

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
