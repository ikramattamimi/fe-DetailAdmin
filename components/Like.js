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
  Platform,
} from 'react-native';
export default class Like extends Component {



  state={
    toggle:true,
    toggle2:true
  }

  _onPress(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
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

    return (
      
      <View style={styles.container}>
        
        <View>
          <TouchableOpacity 
          onPress={()=>this._onPress()}>
            <Text style={{fontSize:36}}>
                {imageValue}
            </Text>
          </TouchableOpacity>
          
          <Text 
            style=
            {{
              color:'black', fontSize:14, position: 'absolute',
              marginLeft:30, fontWeight: '600', top: 2
            }}>
            {textValue}
          </Text>
        </View>
      </View>
    );  
  }
  
};

const stylesByPlatform = Platform.select({
  ios: { fontFamily: 'Roboto' },
  android: { },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text: {
      ...stylesByPlatform,
      color: '#000000',
    },
});