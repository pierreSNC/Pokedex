import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from '../css/ProfilStyles'

const Profile = () => {
    const [camera, setCamera] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [hasPermission, setHasPermission] = useState(false);
    const [isCameraOpened, setIsCameraOpened] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);

    useEffect(() => {
        (async () => {
            //check permission
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
        getProfilePhoto();
    }, []);

    const toggleCameraType = () => {
        setType(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
    }

    const getProfilePhoto = async () => {
        const savedProfilePhoto = JSON.parse(await AsyncStorage.getItem('PROFILE_PHOTO'));
        if(savedProfilePhoto){
            setProfilePhoto(savedProfilePhoto);
        }
    }

    const takePicture = async () => {
        if(camera){
            const data = await camera.takePictureAsync(null);
            setProfilePhoto(data.uri);
            await AsyncStorage.setItem('PROFILE_PHOTO', JSON.stringify(data.uri));
        }
    }

    const removeProfilePhoto = async () => {
        await AsyncStorage.removeItem('PROFILE_PHOTO');
        setProfilePhoto(null);
    }

    return (
        <View>

            <View style={styles.profileContainer}>
                <View style={{
                    height: '100%',
                    width: '100%'
                }}>
                    <Text style={styles.profileTitle}>Your profile</Text>

                    <View style={{
                        height: 400,
                    }}>
                        <View style={styles.profileWrapper}>
                            <View style={styles.profilePictureWrapper}>
                                {profilePhoto ? (
                                    <Image style={styles.profilePicture} source={{uri: profilePhoto}} />
                                ): (
                                    <Image style={styles.profilePicture} source={{uri: 'https://static.wikia.nocookie.net/pokemonworld/images/6/6b/Sacha.png/revision/latest?cb=20130515162819&path-prefix=fr'}} />
                                )}
                            </View>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity onPress={() => setIsCameraOpened(!isCameraOpened)}>
                                    <View>
                                        <AntDesign name="camera" size={30} color="#365fac" />
                                    </View>
                                </TouchableOpacity>
                                {
                                    profilePhoto ? (
                                        <TouchableOpacity style={styles.delete} onPress={removeProfilePhoto}>
                                            <View style={{
                                            }}>
                                                <AntDesign name="delete" size={20} color="#d60000" />
                                            </View>
                                        </TouchableOpacity>
                                    ) : null
                                }
                            </View>
                        </View>
                    </View>
                </View>

            </View>

            {isCameraOpened ? (
                <View style={styles.cameraContainer}>
                    <View style={styles.returnBack}>
                        <TouchableOpacity style={styles.iconItem} onPress={() => setIsCameraOpened(!isCameraOpened)}>
                            <Ionicons name="arrow-back-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.flipCameraWrapper}>
                        <TouchableOpacity style={styles.iconItem} onPress={toggleCameraType}>
                            <MaterialIcons name="flip-camera-android" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.takePictureContainer}>
                        <TouchableOpacity style={styles.takePictureWrapper} onPress={async () => {
                            await takePicture();
                            setIsCameraOpened(!isCameraOpened);
                        }}>
                            <View style={styles.takePictureItem}>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Camera ref={ref => setCamera(ref)} style={{
                        height: '100%',
                        width: '100%',
                    }} type={type}>
                    </Camera>
                </View>
            ) : (
                null
            )}
        </View>
    )
}

export default Profile
