import React, {useEffect, useState} from 'react'
import {Image, Text, View, ScrollView, SafeAreaView, Pressable} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useIsFocused} from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from '../css/Details'

import getBackground from "../utils/getBackground";
import getBackgroundRGBA from "../utils/getBackgroundRGBA";
import getStatsBackground from "../utils/getStatsBackground";
import getStats from "../utils/getStats";


export default function Details({route}) {

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
    }, [isFocused]);

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
    }

    const handlePress = (item) => {
        if (favorites.includes(item.name)) {
            setFavorites(favorites.filter(name => name !== item.name));
        } else {
            setFavorites([...favorites, item.name]);
        }
        saveFavorite(item);
    };
    return (
        <SafeAreaView style={[
            styles.container,

        ]}>
            <ScrollView>
                <View style={[
                    styles.container,

                ]}>
                    <View style={[
                        {backgroundColor: getBackgroundRGBA(route.params.item.types[0].type.name)}
                    ]}>
                        <View style={styles.pokemon__favorite}>
                            <Pressable onPress={() => {
                                handlePress(route.params.item)
                            }}>
                                <Text><Icon name={'heart'} size={40}
                                            color={favorites.find(el => el.name === route.params.item.name) ? 'red' : 'white'}/></Text>
                            </Pressable>
                        </View>
                        <Image
                            style={
                                [
                                    styles.pokemon__sprite,
                                ]
                            }
                            source={{
                                uri: route.params.item.sprites.front_default,
                            }}
                        />
                    </View>
                    <View style={[
                        styles.details__content,

                    ]}>
                        <View style={styles.pokemon__details__wrapper}>
                            <View style={[
                                styles.pokemon__details__item1,
                                {color: getBackground(route.params.item.types[0].type.name)}

                            ]}>
                                <Text style={[
                                    styles.details__order,
                                    {color: getBackground(route.params.item.types[0].type.name)}

                                ]}>
                                    #{route.params.item.order}
                                </Text>
                                <Text style={[
                                    styles.details__name,
                                    {color: getBackground(route.params.item.types[0].type.name)}
                                ]}>
                                    {route.params.item.name}
                                </Text>
                            </View>
                            <View style={styles.pokemon__types}>
                                <View style={[
                                    styles.type__name,
                                    {backgroundColor: getBackgroundRGBA(route.params.item.types[0].type.name)}

                                ]}>
                                    <Text style={styles.details__name__text}>
                                        {route.params.item.types[0].type.name}
                                    </Text>
                                </View>
                                {route.params.item.types[1] ?
                                    <View style={[
                                        styles.type__name,
                                        {backgroundColor: getBackgroundRGBA(route.params.item.types[1] ? route.params.item.types[1].type.name : '')}

                                    ]}>
                                        <Text style={styles.details__name__text}>
                                            {route.params.item.types[1].type.name}
                                        </Text>

                                    </View> : null
                                }
                            </View>
                            <View style={styles.abilities}>
                                <Text style={
                                    {fontWeight: '600'}
                                }>
                                    Abilities :
                                </Text>
                                <Text style={
                                    {marginHorizontal: 10}
                                }>
                                    {route.params.item.abilities[0].ability.name}
                                </Text>
                            </View>
                            {route.params.item.abilities[1] ?
                                <View style={styles.hidden_abilities}>
                                    <Text style={
                                        {fontWeight: '600'}
                                    }>
                                        Hidden abilities :
                                    </Text>
                                    <Text style={
                                        {marginHorizontal: 10}
                                    }>
                                        {route.params.item.abilities[1].ability.name}
                                    </Text>
                                </View>
                                : null }
                            <View style={styles.stats}>
                                <View style={styles.stats__name__wrapper}>
                                    <Text style={styles.stats__name}>
                                        {route.params.item.stats[0].stat.name}
                                    </Text>
                                    <Text style={styles.stats__name}>
                                        {route.params.item.stats[1].stat.name}
                                    </Text>

                                    <Text style={styles.stats__name}>
                                        {route.params.item.stats[2].stat.name}
                                    </Text>
                                    <Text style={styles.stats__name}>
                                        {route.params.item.stats[3].stat.name}
                                    </Text>
                                    <Text style={styles.stats__name}>
                                        {route.params.item.stats[4].stat.name}
                                    </Text>
                                    <Text style={styles.stats__name}>
                                        {route.params.item.stats[5].stat.name}
                                    </Text>
                                </View>
                                <View style={styles.stats__value__wrapper}>
                                    <Text style={styles.stats__value}>
                                        {route.params.item.stats[0].base_stat}
                                    </Text>
                                    <Text style={styles.stats__value}>
                                        {route.params.item.stats[1].base_stat}
                                    </Text>
                                    <Text style={styles.stats__value}>
                                        {route.params.item.stats[2].base_stat}
                                    </Text>
                                    <Text style={styles.stats__value}>
                                        {route.params.item.stats[3].base_stat}
                                    </Text>
                                    <Text style={styles.stats__value}>
                                        {route.params.item.stats[4].base_stat}
                                    </Text>
                                    <Text style={styles.stats__value}>
                                        {route.params.item.stats[5].base_stat}
                                    </Text>
                                </View>
                                <View style={styles.stats__bar__wrapper}>
                                    <View style={styles.stats__bar__item}>
                                        <View style={[
                                            styles.stats__bar__item__value,
                                            {backgroundColor: getStatsBackground(route.params.item.stats[0].base_stat)},
                                            {width: getStats('hp', route.params.item.stats[0].base_stat)}
                                        ]}>
                                        </View>
                                    </View>
                                    <View style={styles.stats__bar__item}>
                                        <View style={[
                                            styles.stats__bar__item__value,
                                            {backgroundColor: getStatsBackground(route.params.item.stats[1].base_stat)},
                                            {width: getStats('attack', route.params.item.stats[1].base_stat)}
                                        ]}>
                                        </View>
                                    </View>
                                    <View style={styles.stats__bar__item}>
                                        <View style={[
                                            styles.stats__bar__item__value,
                                            {backgroundColor: getStatsBackground(route.params.item.stats[2].base_stat)},
                                            {width: getStats('defense', route.params.item.stats[2].base_stat)}
                                        ]}>
                                        </View>
                                    </View>
                                    <View style={styles.stats__bar__item}>
                                        <View style={[
                                            styles.stats__bar__item__value,
                                            {backgroundColor: getStatsBackground(route.params.item.stats[3].base_stat)},
                                            {width: getStats('special-attack', route.params.item.stats[3].base_stat)}
                                        ]}>
                                        </View>
                                    </View>
                                    <View style={styles.stats__bar__item}>
                                        <View style={[
                                            styles.stats__bar__item__value,
                                            {backgroundColor: getStatsBackground(route.params.item.stats[4].base_stat)},
                                            {width: getStats('special-defense', route.params.item.stats[4].base_stat)}
                                        ]}>
                                        </View>
                                    </View>
                                    <View style={styles.stats__bar__item}>
                                        <View style={[
                                            styles.stats__bar__item__value,
                                            {backgroundColor: getStatsBackground(route.params.item.stats[5].base_stat)},
                                            {width: getStats('speed', route.params.item.stats[5].base_stat)}
                                        ]}>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}