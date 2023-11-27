import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../garrafa-e-barril/src/telas/Home';
import Carrinho from '../../garrafa-e-barril/src/telas/Carrinho';
import MinhaConta from '../../garrafa-e-barril/src/telas/MinhaConta';
import Catalogo from '../../garrafa-e-barril/src/telas/Catalogo';
import DetalheProduto from '../../garrafa-e-barril/src/componentes/DetalheProduto';
import { createStackNavigator } from '@react-navigation/stack';

import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CatalogStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Catalogo" component={Catalogo} />
      <Stack.Screen name="DetalheProduto" component={DetalheProduto} />
    </Stack.Navigator>
  );
};

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconPath;

            if (route.name === 'Home') {
              iconPath = require('../assets/HomeIcon.png');
            } else if (route.name === 'Minha conta') {
              iconPath = require('../assets/UserIconPng.png');
            } else if (route.name === 'Catálogo') {
              iconPath = require('../assets/taca.png');
            } else if (route.name === 'Meu carrinho') {
              iconPath = require('../assets/carrinho-de-compras_1.png');
            }

            return <Image source={iconPath} style={{ tintColor: color, width: size, height: size }} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          tabBarStyle: {
            height: 70,
            backgroundColor: '#7A0202',
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Catálogo" component={CatalogStack} />
        <Tab.Screen name="Meu carrinho" component={Carrinho} />
        <Tab.Screen name="Minha conta" component={MinhaConta} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
