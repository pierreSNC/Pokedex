import {StyleSheet} from "react-native";

export default StyleSheet.create({


    item__text: {
        marginRight: 20,
        marginLeft: 10,
    },

    pokemon__container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    pokemon__wrapper: {
        margin: 5,
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
    },

    pokemon__item: {
        flex: 1,
        flexDirection: "row",
        fontSize: 20
    },

    pokemon__item__content: {
        flex: 1,
        justifyContent: 'center'
    },

    item__text__1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'

    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        justifyContent:'space-between'
    },

    pokemon__sprite: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 99,
        borderTopLeftRadius: 99,
    },

    pokemon__favorite: {
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 99
    },

    pokemon__name: {
        fontSize: 32,
        marginTop: 10,
        color: 'white',
        textTransform: 'capitalize'
    },

    pokemon__order: {
        fontSize: 22,
        marginTop: 10,
        color: 'white',
        marginRight: 10
    },

    // input: {
    //     height: 40,
    //     margin: 12,
    //     borderWidth: 1,
    //     padding: 10,
    //     textTransform: 'lowercase',
    // },
    // title: {
    //     fontSize: 38,
    //     alignSelf: "center",
    //     marginBottom: 20,
    // },
});