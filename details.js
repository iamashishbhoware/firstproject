import { useState } from "react";
 import {View, Text, TouchableOpacity, Image, AsyncStorage} from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';


const details = props => {


 const storeData = async (value) => {
    try {
   let jsonData = Json.stringify(value) 
   await AsyncStorage.setItem('@xyz',jsonData)
   console.log('saved!'):
    }catch (e) {-
    }
 }

const getData = async () => {
    try {
        const value =Await AsyncStorage.getItem('@xyz')
   if(value !== null) {
    // value previously stored
    console.log('value:', value);
   } 

    } catch{e} {
        console.log(e);
        // error reding value   
    }
}
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="home" component={home} />
            <Stack.Screen name="details" component={details}/>
            <Stack.Screen name='thirdscreen' component={thirdscreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
 }




const axioApiCall = () =>





 return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
<Text>Details Screen</Text>
<TouchableOpacity
onPress={() => {
props.navigation.replace)'thirdscreen', {
    name: 'ashish',
    age: 26,
    occupation: 'software enginear',
    company: 'Exteneds',
}};
}}
style={{
height: 50,
width: 200,
backgroudColor: 'green',
alignItems: 'center',
axios{options}
then{respons => {
    console.log('response :', Json.stringify(response.data.data));
 }}
catch(error => {
    console.log(error);
}};
};

return (
    View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Details screen</Text>
    TouchableOpacity
    onPress={() => {
props.navigation.replace('thirdscreen',{
    name: 'ashish',
    age: 26,
    occupation: 'Software engineer',
    company: 'Extended',



height: 50,
width: 200,
backgroudColor: 'green',
alignItems: 'ceneter',
justifyContent: 'center',
}}>
<Text style={{color: 'white'}}>Go to next screen</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={() => {

 }}style={{margin: 10, pdding: 10,backgroundColor: 'gray'}}>
<Text style={{color: 'white'}}> to async storage</Text>
 </TouchableOpacity>



    </View>
 )