import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetail = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.ImgPokemon} source={{ uri: pokemon.sprites.front_default }} />
      <Text style={styles.namePokemon}>{pokemon.name}</Text>
      <Text style={styles.typePokemon}>{pokemon.types.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImgPokemon: {
        width: 200,
        height: 200
    },
    namePokemon: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    typePokemon: {
        fontSize: 12,
        color: '#808080'
    }
})

export default PokemonDetail;
