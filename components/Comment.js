import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import {
    Actionsheet,
    useDisclose,
    Box,
    Center,
    NativeBaseProvider,
    PresenceTransition,
} from 'native-base';

import axios from "axios";

export function Comment() {

    // =========================================================================
    //                                 VARIABLE
    // =========================================================================
    const { isOpen, onOpen, onClose } = useDisclose()
    const [newComment, setNewComment] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [totalComment, setTotalComment] = useState();
    const [listComment, setListComment] = useState();
    const [commentPressed, setCommentPressed] = useState(false);
    const [commentID, setCommentID] = useState(2);

    // =========================================================================
    //                                  IMAGE
    // =========================================================================
    const commentIcon = <Image source={require('../assets/icons/comment.png')}
        style={{ width: 25, height: 22 }}
        alt="comment"
    />
    const sendCommentIcon = <Image source={require('../assets/icons/send.png')}
        style={{ width: 23, height: 25 }}
        alt="sendcomment"
    />

    // =========================================================================
    //                                KONSTANTA
    // =========================================================================
    const USER_ID = 6;
    const FEED_ID = 1;
    const GET_TOTAL_COMMENT = `http://192.168.102.8:8080/api/jmlKomen/${FEED_ID}`
    const GET_LIST_COMMENT = `http://192.168.102.8:8080/api/komen/${FEED_ID}`
    const POST_NEW_COMMENT = `http://192.168.102.8:8080/api/komen`

    // =========================================================================
    //                                FUNCTION
    // =========================================================================

    // useEffect (memanggil function di dalamnya sekali di awal run)
    useEffect(() => {
        getListComment();
        getTotalComment();
    }, []);

    //
    const getTotalComment = async () => {
        try {
            const response = await fetch(GET_TOTAL_COMMENT);
            const json = await response.json();
            setTotalComment(json.jml_komen);
        } catch (error) {
            console.error(error);
        }
        // setTimeout(() => getTotalComment(GET_TOTAL_COMMENT), 100)
    }

    // 
    const sendComment = () => {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        const newCommendData = {
            comment_id: totalComment + 1,
            feed_id: FEED_ID,
            user_id: USER_ID,
            comment_text: newComment,
            post_comment: today,
            reply_comment: 1
        }

        if (newComment == '') { }
        else {
            axios.post(POST_NEW_COMMENT, newCommendData);
            setNewComment('')
        }

    }

    const getListComment = async () => {
        try {
            const res = await axios.get(GET_LIST_COMMENT)
            setListComment(res.data.data)
        } catch (error) {
            console.log(error)
        }
        // setTimeout(() => getListComment(GET_LIST_COMMENT), 1000)
    }

    const function1 = (id) => {
        
        if (id == 1){
            setCommentID(id)
        }
        if (id == 2){
            setCommentID(id)
        }
        if (id == 3){
            setCommentID(id)
        }
        if (id == 4){
            setCommentID(id)
        }
        if (id == 5){
            setCommentID(id)
        }

        setCommentPressed(!commentPressed)
    }

    // function function2 (Id) {
    //     setCommentID (Id)
    //     return Id;
    // }

    // =========================================================================
    //                                  RETURN
    // =========================================================================
    return (
        // <View style={styles.container}>
        <>
            {/* COMMENT ICON */}
            <View style={styles.commentIconContainer}>
                <TouchableOpacity
                    style={styles.commentIcon}
                    onPress={onOpen}>
                    {commentIcon}
                </TouchableOpacity>
                <Text style={styles.commentIconTotal}>{totalComment}</Text>
            </View>

            {/* ACTIONSHEET */}
            <Actionsheet isOpen={isOpen} onClose={onClose} size={"full"}>

                <Actionsheet.Content style={styles.actionSheetContent}>

                    <Box justifyContent="center">
                        <Text style={styles.headerCommentTotal} >
                            {/* {Items.length} Interactive Comment */}
                            {totalComment} Interactive Comment
                        </Text>
                    </Box>


                    <ScrollView style={styles.listCommentContainer} >

                        {listComment && listComment.map((item, i) => {
                            return (
                                <>
                                    <TouchableOpacity key={item.comment_id}
                                        onPress={()=>{setCommentPressed(!commentPressed); setCommentID(item.comment_id)}}>
                                        <View >
                                            <View style={styles.header}>
                                                {item.user_id === 1 ?
                                                    <>
                                                        <Image source={require('../assets/icons/hanhan.jpeg')} style={styles.avatar} />
                                                        <Text style={styles.text_header}>manghanz</Text>
                                                    </> : null}
                                                {item.user_id === 2 ?
                                                    <>
                                                        <Image source={require('../assets/icons/jeje.jpeg')} style={styles.avatar} />
                                                        <Text style={styles.text_header}>jeje</Text>
                                                    </> : null}
                                                {item.user_id === 3 ?
                                                    <>
                                                        <Image source={require('../assets/icons/john.jpeg')} style={styles.avatar} />
                                                        <Text style={styles.text_header}>john</Text>
                                                    </> : null}
                                                {item.user_id === 4 ?
                                                    <>
                                                        <Image source={require('../assets/icons/alifah.jpeg')} style={styles.avatar} />
                                                        <Text style={styles.text_header}>wati</Text>
                                                    </> : null}
                                                {item.user_id === 5 ?
                                                    <>
                                                        <Image source={require('../assets/icons/icam.jpg')} style={styles.avatar} />
                                                        <Text style={styles.text_header}>icam</Text>
                                                    </> : null}
                                                {item.user_id > 5 ?
                                                    <>
                                                        <Image source={require('../assets/icons/profile.jpg')} style={styles.avatar} />
                                                        <Text style={styles.text_header}>user</Text>
                                                    </> : null}
                                            </View>
                                            <View >
                                                <Text style={styles.commentList}>{item.comment_text}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                    <PresenceTransition
                                        visible={commentPressed && item.comment_id == commentID && item.reply_comment != 0}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            transition: {
                                                duration: 250,
                                            },
                                        }}
                                    >
                                            {listComment && listComment.map((item, i) => {
                                                return (
                                                    <ScrollView key={item.comment_id} style={{ marginLeft: 50 }}>
                                                        <View style={styles.header}>
                                                            {item.user_id === 1 ?
                                                                <>
                                                                    <Image source={require('../assets/icons/hanhan.jpeg')} style={styles.avatar} />
                                                                    <Text style={styles.text_header}>manghanz</Text>
                                                                </> : null}
                                                            {item.user_id === 2 ?
                                                                <>
                                                                    <Image source={require('../assets/icons/jeje.jpeg')} style={styles.avatar} />
                                                                    <Text style={styles.text_header}>jeje</Text>
                                                                </> : null}
                                                            {item.user_id === 3 ?
                                                                <>
                                                                    <Image source={require('../assets/icons/john.jpeg')} style={styles.avatar} />
                                                                    <Text style={styles.text_header}>john</Text>
                                                                </> : null}
                                                            {item.user_id === 4 ?
                                                                <>
                                                                    <Image source={require('../assets/icons/alifah.jpeg')} style={styles.avatar} />
                                                                    <Text style={styles.text_header}>wati</Text>
                                                                </> : null}
                                                            {item.user_id === 5 ?
                                                                <>
                                                                    <Image source={require('../assets/icons/icam.jpg')} style={styles.avatar} />
                                                                    <Text style={styles.text_header}>icam</Text>
                                                                </> : null}
                                                            {item.user_id > 5 ?
                                                                <>
                                                                    <Image source={require('../assets/icons/profile.jpg')} style={styles.avatar} />
                                                                    <Text style={styles.text_header}>user</Text>
                                                                </> : null}
                                                        </View>
                                                        <View >
                                                            <Text style={styles.commentList}>{item.comment_text}</Text>
                                                        </View>
                                                    </ScrollView>
                                                )
                                            }).reverse()}
                                    </PresenceTransition>
                                </>
                            );
                        }).reverse()}

                        <View style={styles.boxComment}></View>

                    </ScrollView>
                </Actionsheet.Content>

                <KeyboardAvoidingView
                    {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
                    style={styles.inputCommentContainer}>

                    <View style={styles.sendIconContainer}>
                        <TouchableOpacity
                            style={styles.sendIcon}
                            onPress={sendComment}
                        >
                            {sendCommentIcon}
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        multiline
                        style={styles.input}
                        placeholder='Add a new comment'
                        placeholderTextColor='#0f0f0f'

                        maxLength={255}
                        value={newComment}
                        onChangeText={(value) => setNewComment(value)}
                    />

                </KeyboardAvoidingView>
            </Actionsheet>




            {/* </View> */}
        </>
    );
}

// =========================================================================
//                                  STYLES
// =========================================================================
const styles = StyleSheet.create({
    actionSheetContent: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#fff',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    boxComment: {
        width: '100%',
        height: 50,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    commentIcon: {
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 0,
        borderWidth: 0,
        margin: 0,
    },
    commentIconContainer: {
        flexDirection: 'row',
        right: '130%'
    },
    commentIconTotal: {
        fontWeight: 'bold',
        color: '#20252E',
        marginLeft: 10,
    },
    commentList: {
        marginBottom: 45,
        marginLeft: 70,
        marginTop: 20,
        color: '#000',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
    },
    headerCommentTotal: {
        fontSize: 20,
        color: '#000',
        marginBottom: 20
    },
    input: {
        flex: 1,
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
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
    },
    listCommentContainer: {
        borderWidth: 0,
        width: '90%',
    },
    sendIcon: {
        zIndex: 10,
        elevation: 6,
        padding: 10,
    },
    sendIconContainer: {
        position: 'absolute',
        alignItems: 'flex-end',
        justifyContent: 'center',
        right: '6%',
        height: 160,
    },
    text_header: {
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#000',
    },

});

export default () => {
    return (
        <NativeBaseProvider >
            <Center flex={1} >
                <Comment />
            </Center>
        </NativeBaseProvider>
    )
}