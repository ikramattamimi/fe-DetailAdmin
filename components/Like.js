import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";

const Like = () => {

    const [idLike, setIdLike] = useState(false);
    const [totalLike, setTotalLike] = useState(2569);
    const onPressLike = () => {
        setIdLike(!idLike);
        setTotalLike(idLike ? totalLike - 1 : totalLike + 1);
    }
    const likeIcon = idLike ?
        <Image source={require('../assets/icons/love-red.png')} style = {{width: 25, height: 23}} />
        :
        <Image source={require('../assets/icons/love-white.png')} style = {{width: 25, height: 23}}/>;

    return (
        // <View style={styles.container}>
            <View style={styles.likeContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPressLike}
                >
                    {likeIcon}
                </TouchableOpacity>
                <Text style={styles.text}>{totalLike}</Text>
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