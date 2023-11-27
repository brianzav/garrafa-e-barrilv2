import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const MinhaConta = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
        <FontAwesome name="user" size={80} color="black" style={styles.userIcon} />
      </View>

      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="heart" size={24} color="black" />
          <Text>Lista de Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome name="home" size={24} color="black" />
          <Text>Endereços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome name="shopping-cart" size={24} color="black" />
          <Text>Lista de Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome name="question-circle" size={24} color="black" />
          <Text>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 50, 
  },
  userIcon: {
    marginTop: -80,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
});

export default MinhaConta;
