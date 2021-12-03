import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Actionsheet,
  useDisclose,
  Box,
  Center,
  NativeBaseProvider,
} from 'react-native';
import Interactive from '../components/Interactive';
import SearchBar from './searchBar';
import KeyboardAvoidingComponent from '../components/commentInput';
export default class Like extends Component {

  state={
    toggle:true,
    toggle2:true
  }

  _onPress(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

  _onPress2(){
    const newState = !this.state.toggle2;
    this.setState({toggle2:newState})
  }

  render(){
    const {toggle} = this.state;
    const imageValue = toggle?
      <Image
       style={{width:25, height:23}}
       source={require('../assets/icons/love-white.png')}
      />
       :
      <Image
        style={{width:25, height:23}}
        source={require('../assets/icons/love-red.png')}
      />;
    const textValue = toggle?"1,545":"1,546";

    const {toggle2} = this.state;
    const imageValue2 = 
      // <Image
      //   style={{width:27, height:23}}
      //   source={require('../assets/icons/comment2.png')}
      // />
      // :
      <Interactive/>
      ;
      const textValue2 = toggle2?"390":"390";

    return (
      
      <View style={styles.container}>
        
        <View>
          <TouchableOpacity 
          onPress={()=>this._onPress()}
          style={{marginLeft:10, marginTop:220, }}>
            <Text style={{fontSize: 40}}>
                {imageValue}
            </Text>
          </TouchableOpacity>
          <Text 
            style=
            {{
              color:'black', fontSize:14, position: 'absolute',
              marginLeft:40, marginTop:223, 
            }}>
            {textValue}
          </Text>

          <TouchableOpacity 
          onPress={()=>this._onPress2()}
          style={{marginLeft:80, marginTop:220, position: 'absolute' }}>
            <Text style={{fontSize: 41}}>
                {imageValue2}
            </Text>
          </TouchableOpacity>
          {/* <KeyboardAvoidingComponent/> */}
          <Text 
            style=
            {{
              color:'black', fontSize:14, position: 'absolute',
              marginLeft:125, marginTop:223, 
            }}>
            {textValue2}
          </Text>

        </View>
      </View>
    );  
  }
  
};

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose()
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    },
});