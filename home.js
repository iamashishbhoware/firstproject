import React, {useEffect,useRef, useState} from "react";
import {
    ImageBackground,
    View,
    Text,
    Textinput,
    TouchableOpacity,
    Modal,
    Animated,
    TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Enype';
import * as Animatable from 'react-native-animatable';

//send props as a parameter in main function
const home = props => {
    const fad = useRef(new Animated.Value(0)).current;
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [ModalVisible, setModalVisible] = useState(false);
    var a = ' ';

  useEffect{() => {
    Animated.timing(fad, {
        toValue: 1,
        duration: 5000,
    });
}, [fad]};
const customModal = () => {
    return (
        <View
        style={{
            flex: 1,
            justifyContent:'center',
          alignItems: 'center',   
        }}>
            <Modal animation Type "slide" trasprent={true} visible={ModalVisible}>
<View
style={{
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
}}>
    <View
    style={{
height: 100,
width: 200,
justifyContent: 'ceneter',
alignItems: 'center',
backgroundColor:'black',
elevation: 5,
borderRadius: 10,
}}>
<Text style={{color: 'white'}}>User Login Successfully!</Text>
<TouchableOpacity
onPress={() => { 
    setModalVisible(false);
    props.navigation.navigate('DrawerScreens');
}}
style={{
    margin: 10,
    pading: 10,
    backgroundColor: 'green',
    boderRadius: 10,
}}>
<Text style={{color: 'white'}}>ok</Text>
<TouchableOpacity>
    <View>
    </View>
    </Modal>
    </View>
    );
};
export 



source={require('./Image/bg.jpeg')}
style={{height:'100%', width: '100%'}}
resizeMode={'stretch'}>
<View
style={{
flex: 1,
// backgroudColor: 'cyan',
justifyContent: 'center',
alignItems: 'center',
}}>
<TextInput
value={email}
placeholder="Enter the Email"
style={{
    width: 200,
    height: 50,
    backgroudcolor
}}



</View>



></View>

</View>





























justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'black',
elevation: 5,
boarderRadius: 10,
}}>
<Test style={{color: 'white'}}>User Login Successfully!</Test>
<TouchableOpacity
onPress={() => {
    setModalVisible{flase};
    ProgressViewIOSComponent.navigation.navigate("TopTab")
    }}

}
