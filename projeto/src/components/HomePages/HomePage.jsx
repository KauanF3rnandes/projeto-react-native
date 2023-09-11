import { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, ActivityIndicator, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {
    

    const [loading, setLoading] = useState(true)
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([]);

    const typeColors = {
        normal: "#A8A878",
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        ice: "#98D8D8",
        fighting: "#C03028",
        poison: "#A040A0",
        ground: "#E0C068",
        flying: "#A890F0",
        psychic: "#F85888",
        bug: "#A8B820",
        rock: "#B8A038",
        ghost: "#705898",
        dark: "#705848",
        steel: "#B8B8D0",
        dragon: "#7038F8",
        fairy: "#EE99AC",
      };

      const getBackgroundColor = (types) => {
        if (types.length > 0) {
          const mainType = types[0]; 
          return typeColors[mainType] || "#FFFFFF"; 
        }
        return "#FFFFFF"; 
      };
      

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then((resp) => resp.json())
            .then((json) => {
                const promises = json.results.map((result) => {
                    return fetch(result.url)
                        .then((resp) => resp.json());
                });
                
                    Promise.all(promises)
                        .then((pokemonData) => {
                            pokemonData.forEach((pokemon) => {
                            const types = pokemon.types.map((type) => type.type.name);
                            pokemon.types = types;
                    });

                    setPokemonDetails(pokemonData);
                    setLoading(false);
                })
                    .catch(() => alert('Erro ao carregar detalhes dos Pokémon!'));
            })
            .catch(() => alert('Erro ao carregar lista de Pokémon!'));
    }, []);

    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
            <Text style={styles.title}>POKEDEX</Text>
            <View>
                {
                    loading ? <ActivityIndicator /> : (
                        <FlatList
                            data={pokemonDetails}
                            keyExtractor={({ id }) => id.toString()}
                            renderItem={({ item }) => (
                                <SafeAreaView style={styles.container}>
                                    <TouchableOpacity
                                        style={{width: '90%'}}
                                        onPress={() => {
                                            navigation.navigate('PokemonDetail', { pokemon: item });
                                        }}
                                        >
                                        <View style={{
                                            backgroundColor: getBackgroundColor(item.types), padding: 16,
                                            marginTop: 20, alignItems: "center", marginBottom: 20,
                                            height: 120, width: '100%', borderRadius: 10, flexDirection: 'row'
                                        }}>
                                            <Image source={{ uri: item.sprites.front_default }} style={styles.imgPokemons} />

                                            <View style={styles.BoxPokemonName}> 
                                                <Text style={styles.pokemonName}>{item.name}</Text>
                                                <Text style={styles.pokemonType}>{item.types.join(", ")}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </SafeAreaView>
                            )}
                        />

                    )
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 'auto'
    },
    imgPokemons: {
        resizeMode: 'contain',
        height: 120,
        width: 120
    },
    BoxPokemonName: {
        alignItems: "center",
        justifyContent: "center"
    },
    pokemonName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold"
    },
    pokemonType: {
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10
    },
    title: {
        justifyContent: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 30,
        alignItems: "center",
        color: 'red',
        marginLeft: 20, 
    }
})

export default HomePage;