import React, { useState } from "react"
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
  Row,
} from "native-base"

import Comment from "./Comment"

import {
  Platform,
  StyleSheet, TextInput, KeyboardAvoidingView, Dimensions,
} from "react-native"

export function Interactive() {
  const { isOpen, onOpen, onClose } = useDisclose()
  const imageValue2 =
    <Image
      style={{ width: 25, height: 23 }}
      source={require('../assets/icons/comment2.png')}
      alt="comment"
    />

  return (
    <>
      <View>
        <Button
          style={styles.button}
          onPress={onOpen}>
          {imageValue2}
        </Button>
        <Text style={{
          position: 'absolute', bottom: 8, right: 23, fontSize: 14,
          fontWeight: '600'
        }}>360</Text>
      </View>



      <Actionsheet isOpen={isOpen} onClose={onClose} size={"full"} keyboardHandlerEnabled={false} style={styles.acs}>

        <Actionsheet.Content style={{ backgroundColor: '#fff', borderWidth: 0, borderColor: '#fff' }}>
          <Box justifyContent="center">
            <Text
              fontSize="20"
              fontWeight='bold'
              color="black"
              _dark={{
                color: "black",
              }}
            >
              360 Interactive Comment
            </Text>
          </Box>

          <Comment/>
          

        </Actionsheet.Content>
        
      </Actionsheet>

      

    </>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 0,
    borderWidth: 0,
    position: 'absolute',
    right: 40,
    bottom: -3,
    fontSize: 36
  },
  box: {
    width: 400,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginBottom: 10,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  input: {

    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 50,
    color: '#21262f',
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
    fontSize: 15,
  },
  ci: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: 80,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 2,
    zIndex: 20,
    elevation: 15,
  },
  acs:{
    zIndex: 3,
    elevation: 3,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    // borderWidth: 1,
    // width: '80%',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 50,
    backgroundColor: '#fff',
    marginHorizontal: '5%',
    color: '#000',
    shadowColor: "#898989",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    fontSize: 15,
  },
  inputCommentContainer: {
    // flex: 1,
    // zIndex: 11,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    bottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
    right: '6%',
    height: 160,
  },
  // button: {
  //   zIndex: 10,
  //   elevation: 6,
  //   padding: 10,
  // },
  listCommentContainer: {
    borderWidth: 0,
    width: '90%',
    marginBottom: 100
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
  },
  commentValue: {
    marginBottom: 45,
    marginLeft: 70,
    marginTop: 20,
    color: '#000',
  },
  text_header: {
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#000',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    // flex: 1,
  },
})
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="0">
        <Interactive />
      </Center>
    </NativeBaseProvider>
  )
}
