import React, { Component } from "react";
import { View,Text, TouchableOpacity} from "react-native";
import ContextApiController from "./contextApiScreen";

//class will always extends React.Component
class contextApiScreen extends ContextApiController{
    //contructor always need to define
    constructor () {
        super();
        this.state = {
//our state variable here 
variable:'',        
        };
    }

   
    functionfromantoherclass = ()=> {
console.log{'in in another class'}
    }

}


export default ContextApiController;