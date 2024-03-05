import {StyleSheet} from "react-native";

export default StyleSheet.create({
    profilePicture: {
        width: '100%',
        borderRadius: 9999,
        height: '100%',
        alignSelf: 'center'
    },

    profileTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 20,
        marginLeft: 10,
    },

    profileContainer: {
        marginTop: 50,
    },

    profileWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    profilePictureWrapper: {
        width: '50%',
        height: '50%',
        marginTop: 10,
        borderRadius: 999,
        marginBottom: -40
    },

    delete: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },

    cameraContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
    },

    returnBack: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
    },

    iconItem:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 99999,
    },

    flipCameraWrapper: {
        position: 'absolute',
        bottom: 70,
        right: 20,
        zIndex: 1,
    },

    takePictureContainer: {
        position: 'absolute',
        bottom: 60,
        right: '50%',
        transform: [{translateX: 35}],
        zIndex: 1,
    },

    takePictureWrapper:{
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 99999,
    },

    takePictureItem: {
        padding: 30,
        borderRadius: 99999,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000'
    }
});


