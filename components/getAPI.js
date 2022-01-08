import axios from "axios";
import { NativeBaseProvider, ScrollView } from "native-base";
import { NativeBaseConfigProvider } from "native-base/lib/typescript/core/NativeBaseContext";
import React, { useState, useEffect } from "react";

import { SafeAreaView, Text, Image, StyleSheet, View } from "react-native";

export default function App() {

    const [data, setData] = useState()

    const getData = async () => {
        try {
            const res = await axios.get('http://192.168.100.7:8080/api/komen/3')
            setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <NativeBaseProvider>
                <SafeAreaView>
                    <ScrollView>
                        {data && data.map((item, i) => {
                            return (
                                <>
                                    <View key={item.comment_id.key}>
                                        <View style={styles.header}>
                                            <Image source={require('../assets/icons/profile.jpg')} style={styles.avatar} />
                                            <Text style={styles.text_header}>{item.user_id}</Text>
                                        </View>
                                        <View >
                                            <Text style={styles.newComment}>{item.comment_text}</Text>
                                        </View>
                                    </View>
                                </>
                            );
                        })}

                    </ScrollView>
                </SafeAreaView>
            </NativeBaseProvider>
        </>
    );

}

const styles = StyleSheet.create({
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
    },
    text_header: {
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#000',
    },
    newComment: {
        marginBottom: 45,
        marginLeft: 70,
        marginTop: 20,
        color: '#000',
    },
})