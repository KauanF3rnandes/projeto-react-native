import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const SobrePage = () => {
  const [regionData, setRegionData] = useState(null);

  useEffect(() => {
    async function fetchRegionData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/region/1/');
        setRegionData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRegionData();
  }, []);

  return (
      <View style={styles.container}>
          <View style={styles.containerLogo}>
            <Image style={styles.logo} source={require("../../img/pokemon-logo.png")}/>
          </View>
          <View>
            <Text style={styles.header}>Sobre o Site Pokémon</Text>    
          </View>
      {regionData ? (
        <Text style={styles.text}>
          Este site é dedicado à região de {regionData.name}, onde você pode encontrar
          informações sobre os Pokémon exclusivos dessa região e explorar suas aventuras
          emocionantes.
        </Text>
      ) : (
        <Text style={styles.text}>Carregando informações da região...</Text>
      )}
      <Text style={styles.text}>
        Bem-vindo ao nosso site Pokémon, onde você pode encontrar informações sobre
        os seus Pokémon favoritos, explorar diferentes regiões e muito mais. Nosso
        objetivo é fornecer aos fãs de Pokémon uma experiência divertida e informativa.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
    },
    containerLogo: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
  logo: {
    width: "50%",
    height: "30%",
    }
});

export default SobrePage;
