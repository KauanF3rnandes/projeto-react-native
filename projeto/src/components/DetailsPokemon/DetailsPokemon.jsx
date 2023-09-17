import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetail = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.numberBox}>
        <Text style={styles.number}>{pokemon.order}#</Text>
      </View>
      <Image style={styles.ImgPokemon} source={{ uri: pokemon.sprites.front_default }} />
      <View style={styles.descriptionPokemon}>
        <Text style={styles.namePokemon}>Name: {pokemon.name}</Text>
        <Text style={styles.typePokemon}>Type:{pokemon.types.join(', ')}</Text>
        <Text style={styles.tamanho}>Tamanho: {pokemon.weight}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8e3cd'
    },
    ImgPokemon: {
        width: 200,
        height: 200,
    },
    namePokemon: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    typePokemon: {
        fontSize: 18,
  },
  descriptionPokemon: {
    backgroundColor: '#dfcbb5',
    width: '65%',
    height: 120,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  tamanho: {
    fontSize: 18
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 150,
  },
})

export default PokemonDetail;
