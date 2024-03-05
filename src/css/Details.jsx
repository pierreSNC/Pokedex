import {StyleSheet} from "react-native";

export default StyleSheet.create({


    container: {
      backgroundColor: '#fff'
    },

    details__content: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -30,
        backgroundColor: '#fff',
        paddingBottom: 100

    },

    pokemon__sprite: {
        width: 200,
        height: 200,
        borderRadius: 99,
        alignSelf: 'center',
        marginBottom: 50,
    },

    pokemon__favorite: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 99
    },

    pokemon__details__wrapper:{
        paddingLeft: 30,
        paddingTop: 30
    },

    pokemon__details__item1:{

    },

    details__order: {
        fontSize: 22,
        fontWeight: 'bold'

    },

    details__name: {
        fontSize: 32,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        marginBottom: 20
    },

    pokemon__types: {
      flex: 1,
      flexDirection: 'row',
        marginBottom: 10

    },

    type__name: {
        borderRadius: 20,
        padding: 5,
        marginRight: 5,
        color: '#fff'
    },

    details__name__text: {
        color: '#fff',
        fontWeight: 'bold'
    },

    abilities: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },

    hidden_abilities: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 30
    },

    stats: {
        flex: 1,
        flexDirection: 'row'
    },

    stats__name:{
      fontWeight: '600',
      marginRight: 5,
      marginBottom: 10
    },

    stats__value: {
        color: 'lightgrey',
        marginBottom: 10

    },


    stats__name__wrapper: {
        marginRight: 10
    },

    stats__value__wrapper: {
        marginRight: 10
    },

    stats__value__item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    stats__bar__wrapper: {
      marginTop: 3
    },

    stats__bar__item: {
        height: 10,
        width: 150,
        backgroundColor: '#eaeaea',
        marginBottom: 17,
        borderRadius: 20,
        overflow: 'hidden'

    },

    stats__bar__item__value: {
        height: 10,
        borderTopLeftRadius: 20,
        borderRadius: 20,
    }
});