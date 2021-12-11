import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default class InputComment extends Component {
    constructor(props) {
        super(props);
        this.state = { Num1: '' };
    }
    F1 = (commentValue) => {
        const {Num1} = this.state;
    }
    render() {
        return (
            <View>
                <View>
                    <TextInput style={{ borderWidth: 1, margin: 10 }} onChangeText={Num1 => this.setState({ Num1 })}></TextInput>
                    <Button title="Click Me" style={{ margin: 10 }} onPress={()=>{this.F1}} />
                </View>
                <View>
                </View>
            </View>
        );
    }
}