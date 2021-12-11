import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    SectionList,
    RefreshControl,
    onRefresh,
    KeyboardAvoidingView,
} from "react-native";

const Comment = () => {

    const [commentValue, setCommentValue] = useState('');

    const sendIcon = <Image source={require('../assets/icons/send.png')} style={{ width: 23, height: 25 }} />

    const sendComment = () => {
        if (commentValue == ''){

        }
        else {
            setItems([...Items, {
                key: Items.length + 1,
                user: 'icam',
                avatar: <Image source={require('../assets/icons/profile.jpg')} style={styles.avatar} />,
                comment: commentValue,
            }]);
            setCommentValue('');
        }
    }

    const [Items, setItems] = useState([
        {
            key: 1,
            user: 'wati',
            avatar: <Image source={require('../assets/icons/alifah.jpeg')} style={styles.avatar} />,
            comment: 'Ih dimana ituuu',
        },
        {
            key: 2,
            user: 'manghanz',
            avatar: <Image source={require('../assets/icons/hanhan.jpeg')} style={styles.avatar} />,
            comment: 'Mengerii teu ngajak ngajak',
        },
        {
            key: 3,
            user: 'jeje',
            avatar: <Image source={require('../assets/icons/jeje.jpeg')} style={styles.avatar} />,
            comment: 'Bagus banget tempatnyaaa',
        },
        {
            key: 4,
            user: 'john',
            avatar: <Image source={require('../assets/icons/profile.jpg')} style={styles.avatar} />,
            comment: 'Tag dulu atuh yang motonya',
        },
        {
            key: 5,
            user: 'wati',
            avatar: <Image source={require('../assets/icons/alifah.jpeg')} style={styles.avatar} />,
            comment: 'Ih dimana ituuu',
        },
        {
            key: 6,
            user: 'manghanz',
            avatar: <Image source={require('../assets/icons/hanhan.jpeg')} style={styles.avatar} />,
            comment: 'Mengerii teu ngajak ngajak',
        },
        {
            key: 7,
            user: 'jeje',
            avatar: <Image source={require('../assets/icons/jeje.jpeg')} style={styles.avatar} />,
            comment: 'Bagus banget tempatnyaaa',
        },
        {
            key: 8,
            user: 'john',
            avatar: <Image source={require('../assets/icons/profile.jpg')} style={styles.avatar} />,
            comment: 'Tag dulu atuh yang motonya',
        },
        {
            key: 9,
            user: 'wati',
            avatar: <Image source={require('../assets/icons/alifah.jpeg')} style={styles.avatar} />,
            comment: 'Ih dimana ituuu',
        },
        {
            key: 10,
            user: 'manghanz',
            avatar: <Image source={require('../assets/icons/hanhan.jpeg')} style={styles.avatar} />,
            comment: 'Mengerii teu ngajak ngajak',
        },
        {
            key: 11,
            user: 'jeje',
            avatar: <Image source={require('../assets/icons/jeje.jpeg')} style={styles.avatar} />,
            comment: 'Bagus banget tempatnyaaa',
        },
        {
            key: 12,
            user: 'john',
            avatar: <Image source={require('../assets/icons/profile.jpg')} style={styles.avatar} />,
            comment: 'Tag dulu atuh yang motonya',
        },
    ]);


    return (
        // <View style={styles.container}>
        <>

            <ScrollView style={styles.listCommentContainer} >
                {
                    Items.map((object) => {
                        return (
                            <View  key={object.key}>
                                <View style={styles.header}>
                                    {object.avatar}
                                    <Text style={styles.text_header}>{object.user}</Text>
                                </View>
                                <View >
                                    <Text style={styles.commentValue}>{object.comment}</Text>
                                </View>
                            </View>
                        )
                    }).reverse()
                }
            </ScrollView>

            <KeyboardAvoidingView
                {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
                style={styles.inputCommentContainer}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={sendComment}
                    >
                        {sendIcon}
                    </TouchableOpacity>
                </View>

                <TextInput
                    multiline
                    style={styles.input}
                    placeholder='Add a new comment'
                    placeholderTextColor='#0f0f0f'

                    maxLength={255}
                    value={commentValue}
                    onChangeText={(value) => setCommentValue(value)}
                />

            </KeyboardAvoidingView>
        {/* </View> */}
        </>
    );
}

const styles = StyleSheet.create({
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
    button: {
        zIndex: 10,
        elevation: 6,
        padding: 10,
    },
    listCommentContainer: {
        borderWidth: 0,
        width: '90%',
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

});

export default Comment;