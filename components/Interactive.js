import React from "react"
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  ScrollView,
  Image,
  View,
} from "native-base"

import KeyboardAvoidingComponent from '../components/commentInput';

import{
  Platform,
  StyleSheet, TextInput,KeyboardAvoidingView, KeyboardAvoidingViewComponent,
} from "react-native"
export function Interactive() {
  const { isOpen, onOpen, onClose } = useDisclose()
  const imageValue2 = 
      <Image
        style={{width:27, height:23}}
        source={require('../assets/icons/comment2.png')}
        alt = "comment"
      />
  return (
    <>
<View>
      <Button  
        style={styles.button}
       onPress={onOpen}>{imageValue2}
      </Button>
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
      
        <Actionsheet.Content>
          <Box justifyContent="center">
            <Text
              fontSize="20"
              fontWeight='bold'
              color="black"
              _dark={{
                color: "black",
              }}
            >
             390 Interactive Comment
            </Text>
          </Box>
          {/* <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.container}
    >

        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
    </KeyboardAvoidingView> */}
              <ScrollView>
          
          <View style = {styles.box}>
          <Actionsheet.Item>
            Kamu lagi dimana??? ini aku kirim </Actionsheet.Item>
          </View>  
          <View style = {styles.box}>
          <Actionsheet.Item>
            Kamu lagi dimana??? ini aku kirim </Actionsheet.Item>
          </View> 
           <View style = {styles.box}>
          <Actionsheet.Item>
            Kamu lagi dimana??? ini aku kirim</Actionsheet.Item>
          </View> 
           <View style = {styles.box}>
          <Actionsheet.Item>
            Kamu lagi dimana??? ini aku kirim </Actionsheet.Item>
          </View> 
           <View style = {styles.box}>
          <Actionsheet.Item>
            Kamu lagi dimana??? ini aku kirim</Actionsheet.Item>
          <View style = {styles.box}>
            <KeyboardAvoidingComponent style={{position:'absolute'}}/>
          </View>
          
          </View>

         </ScrollView>
         
         
        </Actionsheet.Content>
    {/* <KeyboardAvoidingViewComponent/> */}
      </Actionsheet>

    </>
  )
}

const styles = StyleSheet.create({
  button : {
    marginRight:0,
    marginLeft:0,
   marginTop:0,
    paddingTop:0,
    paddingBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  box: {
    width : 400,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginBottom: 10,
    justifyContent : "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="0">
        <Interactive />
        {/* <KeyboardAvoidingComponent/> */}
      </Center>
    </NativeBaseProvider>
  )
}
