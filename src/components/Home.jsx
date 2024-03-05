import {StatusBar} from "expo-status-bar";
import * as React from 'react';

import {useState, useEffect} from "react";
import {Text, View, FlatList, Image, TouchableOpacity, TextInput, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import getBackground from "../utils/getBackground";
import getBackgroundRGBA from "../utils/getBackgroundRGBA";
import getSize from "../utils/getSize";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import inputStyle from '../css/Input'

const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=493&offset=0";
const fourthGenPokemonPath = `${pokePath}${pokeQuery}`;

export default function Home() {

    const [fourthGenPokemonDetails, setFourthGenPokemonDetails] = useState([]);
    const [pokemonFavorite, setPokemonFavorite] = useState(null);
    const [text, setText] = React.useState("");
    const fetchPokemons = async () => {
        const fourthGenPokemonIdsResponse = await fetch(fourthGenPokemonPath);
        const fourthGenPokemonIdsBody = await fourthGenPokemonIdsResponse.json();

        const fourthGenPokemonDetails = await Promise.all(
            fourthGenPokemonIdsBody.results.map(async (p) => {
                const pDetails = await fetch(p.url);
                return await pDetails.json();
            })
        );

        setFourthGenPokemonDetails(fourthGenPokemonDetails);
    };
    useEffect(() => {
        fetchPokemons();
    }, []);

    const navigation = useNavigation();
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
                            handlePress(item)
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
            for (let i = 0; i < favoritesArray.length; i++) {
                console.log(favoritesArray[i].name);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handlePress = (item) => {
        if (favorites.includes(item.name)) {
            setFavorites(favorites.filter(name => name !== item.name));
        } else {
            setFavorites([...favorites, item.name]);
        }
        saveFavorite(item);
    };

    const handleOnChange = (param) => {
        setText(param);
    };

    const fetchSearchPokemon = async (name) => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=493");
            const data = await response.json();
            const filteredPokemon = data.results.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
            const pokemonDetails = await Promise.all(filteredPokemon.map(async pokemon => {
                const pokemonResponse = await fetch(pokemon.url);
                return await pokemonResponse.json();
            }));
            setFourthGenPokemonDetails(pokemonDetails);
    };

    return (
        <View style={styles.pokemon__container}>
            <View>
                <Image
                    style={
                        [
                            {height: 110},
                            {width: 300},
                            {alignSelf: 'center'},
                            {marginTop: 10}
                        ]
                    }
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png',
                    }}
                />
            </View>
            <TextInput
                style={
                    inputStyle.inputs
                }
                onChangeText={(text) => {
                    handleOnChange(text);
                    fetchSearchPokemon(text);
                }}
                value={text}
                placeholder="What Pokemon are you looking for?"
            />

            <FlatList data={fourthGenPokemonDetails} renderItem={renderPokemon}/>
            <StatusBar style="auto"/>
        </View>
    );
}

import styles from '../css/Card'