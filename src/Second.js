import React from 'react';
import { StyleSheet,View,Text,TextInput,Button} from 'react-native';


class Second extends React.Component{
    state={
           fname:'',
           sname:'' ,
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
                    <View style={{width: 400, height: 50, backgroundColor: 'powderblue',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'red',textAlign:'center'}}>{'LOVE % CALCULATOR'}</Text>
                    </View>
                </View>
                
                <View style={{alignItems:'center'}}>
                <TextInput style={{borderWidth:1,width:300,alignItems:'center'}}
                    label='persion1(male)'
                    value={this.state.fname}
                    onChangeText={text => this.setState({fname:text})}
                    placeholder='fname'
                />
                </View>
                <View style={{flex:1,alignItems:'center',padding:10}}>
                <TextInput style={{borderWidth:1,width:300,alignItems:'center'}}
                    label='persion1(male)'
                    value={this.state.fname}
                    onChangeText={text => this.setState({fname:text})}
                    placeholder='sname'
                />
                </View>
                <View style={styles.bottom}>
                    <Button 
                        onPress={this._onPressButton}
                        title="calculate"
                    />
                </View>
            </View>
            
        )
    }
}


export default Second;

const styles =StyleSheet.create({
    container:{
        flex:1,
        
       
        
    },
   
   
})
