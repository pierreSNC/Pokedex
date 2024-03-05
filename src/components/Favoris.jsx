import React, { useState, useEffect } from 'react';
import {Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, Image, TouchableOpacity, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import getSize from "../utils/getSize";
import getBackground from "../utils/getBackground";
import getBackgroundRGBA from "../utils/getBackgroundRGBA";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from '../css/Card'
import titleStyle from '../css/Titles'

export default function Favoris() {
    const isFocused = useIsFocused();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const favorites = await AsyncStorage.getItem('favorites') || '[]';
                setFavorites(JSON.parse(favorites));
            } catch (e) {
                console.error(e);
            }
        };
        getFavorites();
    }, []);

    const saveFavorite = async (pokemon) => {
        try {
            const favorites = await AsyncStorage.getItem('favorites') || '[]';
            let favoritesArray = JSON.parse(favorites);
            const index = favoritesArray.findIndex(favPokemon => favPokemon.name === pokemon.name);
            if (index === -1) {
                favoritesArray.push(pokemon);
            } else {
                favoritesArray.splice(index, 1);
            }
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
            setFavorites(favoritesArray);
        } catch (e) {
            console.error(e);
        }

    };

    const renderPokemon = ({item}) => {

        return (
            <TouchableOpacity


                onPress={() =>
                    navigation.navigate(
                        "Detail",
                        {item: item}
                    )
                }
            >
                <View
                    style={
                        [
                            styles.pokemon__wrapper,
                            {backgroundColor: getBackground(item.types[0].type.name)}
                        ]
                    }
                >
                    <View style={styles.pokemon__favorite}>
                        <Pressable onPress={() => {
                            saveFavorite(item)
                        }}>
                            <Text><Icon name={'heart'} size={30} color={favorites.find(el => el.name === item.name) ? 'red' : 'white'} /></Text>
                        </Pressable>
                    </View>
                    <View style={styles.pokemon__item}>
                        <View style={styles.pokemon__item__content}>
                            <View style={styles.item__text}>

                                <View>
                                    <Text style={styles.pokemon__order}>
                                        #{item.order}
                                    </Text>

                                </View>
                                <View>
                                    <Text style={styles.pokemon__name}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.pokemon__sprite}>
                            <Image
                                style={
                                    [
                                        {height: getSize(item.height)},
                                        {width: getSize(item.height)},
                                        {backgroundColor: getBackgroundRGBA(item.types[0].type.name)},
                                    ]
                                }
                                source={{
                                    uri: item.sprites.front_default,
                                }}
                            />
                        </View>
                    </View>
                </View>

            </TouchableOpacity>

        );

    };

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const favorites = await AsyncStorage.getItem('favorites') || '[]';
                setFavorites(JSON.parse(favorites));
            } catch (e) {
                console.error(e);
            }
        };
        getFavorites();
    }, [isFocused]);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={titleStyle.titles}>
                    Favorite Pokemon
                </Text>
            </View>
            <FlatList data={favorites} renderItem={renderPokemon} />
        </View>
    );
}

