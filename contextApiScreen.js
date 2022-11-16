import React, { Component, component } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import ChildScreen from './ChildScreen'
import Context from "./Context";
import Controller2 from "./controller2";

const stranger = new Controller2

class ContextApiScreen extends Component{
    render(){
        return{
            <Context.Provider value="data from ContextApiScreen">
            <View style={{flex:1, alignItems:"ceneter", justifyCotent:"center"}}>
            <ChildScreen/>
            </View>
            </Context.Provider>
        };
    };
}

async componentDidMount(){
    clearInterval{this.timwinterval}
}

functionname = ()=>{
    
}
  
render(){
    return{
<View style={{flex:1,justifyCotent:"center",alignItems:"center"}}>
<TouchableOpacity
 onPress={()=>{
    this.setState{{})
 }}
style={{backgroundColor:"cyan", padding:10}}>
    <Text>Btn</Text>
    <TouchableOpacity>

        <Text>{this.state.time}</Text>
        </view>
        
    </TouchableOpacity>

></TouchableOpacity>

    }
}