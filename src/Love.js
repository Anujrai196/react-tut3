import React from 'react';
import { TextInput,Appbar ,Button} from 'react-native-paper';
import {StyleSheet,View,Text} from 'react-native';

import DisplayLove from './DisplayLove';

class Love extends React.Component{
    state={
        fname:'',
        sname:'',
        result:"loading"
    }
    submitit(){
       fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&snames=${this.state.sname}`,{
            "method": "GET",
	    headers:{
		    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
		    "x-rapidapi-key": "e983a408eemsh46ab7a285421b91p191d69jsn6b570178ad5b"
        } 
})
        .then(data => data.json())
        .then(data2 => {
            console.log(data2)
                // console.log(JSON.stringify(this.state.data2))
                this.setState({result:data2 })
        })
    }

    render(){
        
        return(
            <View style={styles.container}>
            <Appbar>
                
                <Appbar.Content style={{alignItems:'center'}}
                title="Love % Calculator"
                />
 
            </Appbar>
                <TextInput 
                    
                    label='persion1(male)'
                    value={this.state.fname}
                    onChangeText={text => this.setState({fname:text})}
                /> 
                <TextInput 
                    
                    label='persion2(female)'
                    value={this.state.sname}
                    onChangeText={text => this.setState({sname:text})}
                /> 
                <Button icon="face" mode="contained" style ={{margin:10}} 
                onPress={this.submitit.bind(this)}>
                    Calculate
                 </Button>
                 <DisplayLove data={this.state.result}/>
            </View>
        )
    }
}


export default Love;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    text:{
        fontSize:40,
        padding:10,
        }
})
