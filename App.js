import React from "react";
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativestackNavigator }from '@react-navigation/native-stack';
 import details from './details' 
 import home from './home';
 import thirdsreens from './thirdsreen'
import { creatBottomTabNavigator } from 'react-navigation/bottom-tabs';
import { Image } from "react-native";
import { createMaterialTopTabnavigator } from '@react-navigation/bottom-tabs';

 const TopTab= createMaterialTopTabnavigator();

 const Stack = createNativestackNavigator();
 const Drawer = creatDrawerNavigator();

 export const MyTab = () => {
    return (
//<NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='details' component={details}/>
        <Drawer.screen name={thirdscreen} component={thirdscreen}/>
        <Drawer.Screen
        name="TopTab"
        component={{title: 'Home Tabs'}}
        />


      ScreenOptions={({route})=>{

DrawerIcon:{( )}
if(route.name==="details"){
  return <Image source={(uri:https://ico.org.uk/media/4021925/direct-marketing-paper-planes.png)} style/>
}
      }}>
      <Drawer.Screen name= "thirdsreens" component={thirdsreen}/>
      <Drawer.Screen name="details" component={details}/>

      </Drawer.Navigator>
    )
 }


 const App = () => {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="home" component={home} />
<Stack.Screen name="details" component={details} />
<Stack.Screen name='thirdscreen' component={thirdsreens} />
<Stack.Screen name='MyTabs' component={MyTabs} />
</Stack.Navigator>
</NavigationContainer>
);
 };

  export default App;
