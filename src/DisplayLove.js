import React from 'react';
import {StyleSheet,View,Text} from 'react-native';


const DisplayLove = (props) =>{
    console.log(props)
    

    if(props.data =='loading'){
        return<Text style={{textAlign:'center',fontSize:20}}>{'Please Wait....'}</Text>

    }if(props.data.message){
       return <Text> Sorry somthing went wrong try again</Text>
    }
    
    else{
    return(
        <View style={styles.contaner}>
            <Text style={styles.text}>{props.data.percentage}</Text>
            <Text style={styles.text}>{props.data.result}</Text>
        </View>
    )
    }
}
export default DisplayLove;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    text:{
        fontSize:40,
        padding:10,
        textAlign:'center',
        }
})
