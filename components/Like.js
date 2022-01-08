import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";

import Axios from "axios";

const Like = () => {


    // =========================================================================
    //                                 VARIABLE
    // =========================================================================
    const [jmlLike, setJmlLike] = useState();
    const [statusLike, setStatusLike] = useState();
    const [currentStatusLike, setCurrentStatusLike] = useState(false);

    // =========================================================================
    //                                  IMAGE
    // =========================================================================
    const likeIcon = currentStatusLike ?
        <Image source={require('../assets/icons/love-red.png')} style={{ width: 25, height: 23 }} />
        :
        <Image source={require('../assets/icons/love-white.png')} style={{ width: 25, height: 23 }} />;

    // =========================================================================
    //                                KONSTANTA
    // =========================================================================
    const USER_ID = 12;
    const FEED_ID = 1;
    const GET_JML_LIKE = `http://192.168.102.8:8080/api/jmllike/${FEED_ID}`;
    const GET_STATUS_LIKE = `http://192.168.102.8:8080/api/like/${USER_ID}/${FEED_ID}`;
    const POST_NEW_LIKE = `http://192.168.102.8:8080/api/like`;
    const PUT_LIKE = `http://192.168.102.8:8080/api/like/${USER_ID}/${FEED_ID}`;
    const PUT_UNLIKE = `http://192.168.102.8:8080/api/like/${USER_ID}/${FEED_ID}`;

    // =========================================================================
    //                                FUNCTION
    // =========================================================================
    const getJmlLike = async () => {
        try {
            const response = await fetch(GET_JML_LIKE);
            const json = await response.json();
            setJmlLike(json.jml_like);
        } catch (error) {
            console.error(error);
        } finally {
            console.log(jmlLike);
        }
    }

    const getStatusLike = async () => {
        try {
            const res = await Axios.get(GET_STATUS_LIKE)
            setStatusLike(res.data.like_status)
            setStatusIconLike();
        } catch (error) {
            console.log(error)
        } finally {
            console.log(statusLike);
            setLoading(false);
        }
    }

    const setStatusIconLike = () => {
        if (statusLike == "none" || statusLike == "false") {
            setCurrentStatusLike(false);
        }
        else if (statusLike == "true") {
            setCurrentStatusLike(true);
        }
    }

    useEffect(() => {
        getJmlLike();
        getStatusLike();
        // setTotalLike(jmlLike);
    });


    const onPressLike = () => {
        if (statusLike == "none") {

            setCurrentStatusLike(true);
            setJmlLike(jmlLike + 1);

            const like = {
                user_id: USER_ID,
                feed_id: 1,
                status_like: true,
            }

            Axios.post(POST_NEW_LIKE, like)
        }

        else if (statusLike == "false") {
            const like = {
                status_like: true,
            }
            Axios.put(PUT_LIKE, like)
        }

        else if (statusLike == "true") {
            setCurrentStatusLike(false);
            setJmlLike(jmlLike - 1);
            const unlike = {
                status_like: false,
            }
            Axios.put(PUT_UNLIKE, unlike)
        }
    }


    return (
        // <View style={styles.container}>
        <View style={styles.likeContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPressLike}
            >
                {likeIcon}
            </TouchableOpacity>
            <Text style={styles.text}>{jmlLike}</Text>
        </View>

        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    likeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        // flex: 1,
        // position: "absolute",
        // borderRadius: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#20252E'
    }
});

export default Like;