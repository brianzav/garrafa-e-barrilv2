import React from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";

const winesData = {
  argentinos: [
    { id: '1', name: 'Guaspari Syrah Vista ', price: 20, image: require('../../../assets/argentino1.png') },
    { id: '2', name: 'Guaspari Syrah  ', price: 20, image: require('../../../assets/argentino2.png') },
    { id: '3', name: 'Malbec Finca La Linda ', price: 23, image: require('../../../assets/argentino3.png') },
    { id: '4', name: 'Torrontés Colomé ', price: 27, image: require('../../../assets/argentino4.png') },
    { id: '5', name: 'Bonarda Trapiche ', price: 73, image: require('../../../assets/argentino5.png') }
  ],
  brasileiros: [
    { id: '1', name: 'Pizzato Legno Chardonnay ', price: 13, image: require('../../../assets/brasileiro1.png') },
    { id: '2', name: 'Casa Valduga  ', price: 72, image: require('../../../assets/brasileiro2.png') },
    { id: '3', name: 'Salton Talento', price: 40, image: require('../../../assets/brasileiro3.png') },
    { id: '4', name: 'Miolo Merlot Reserva ', price: 30, image: require('../../../assets/brasileiro4.png') },
    { id: '5', name: 'Lidio Carraro  ', price: 13, image: require('../../../assets/brasileiro5.png') }

  ],
  uruguaios: [
    { id: '1', name: 'Tannat Reserva ', price: 45, image: require('../../../assets/uruguaio1.png') },
    { id: '2', name: 'Albariño Pizzorno ', price: 65, image: require('../../../assets/uruguaio2.png') },
    { id: '3', name: 'Preludio Barrel ', price: 32, image: require('../../../assets/uruguaio3.png') },
    { id: '4', name: 'Merlot Juanicó ', price: 41, image: require('../../../assets/uruguaio4.png') },
    { id: '5', name: 'Cabernet Franc ', price: 53, image: require('../../../assets/uruguaio5.png') }
  ],
  chilenos: [
    { id: '1', name: 'Casillero del Diablo  ', price: 120, image: require('../../../assets/chileno1.png') },
    { id: '2', name: 'Montes Alpha ', price: 400, image: require('../../../assets/chileno2.png') },
    { id: '3', name: 'Santa Rita ', price: 129, image: require('../../../assets/chileno3.png') },
    { id: '4', name: 'Errázuriz Max ', price: 91, image: require('../../../assets/chileno4.png') },
    { id: '5', name: 'Cono Sur ', price: 34, image: require('../../../assets/chileno5.png') },

  ],
};

const WineItem = ({ item, navigation }) => {
  const navigateToProduct = () => {
    navigation.navigate('DetalheProduto', { product: item }); 
  };

  return (
    <TouchableOpacity onPress={navigateToProduct}>
      <View style={{ marginRight: 15 }}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
          <Image
            source={item.image}
            style={{ width: '100%', height: 150, aspectRatio: 1, borderRadius: 10 }}
            resizeMode="contain"
          />
          <Text style={{ color: 'black', marginTop: 5, textAlign: 'left' }}>{item.name}</Text>
          <Text style={{ color: 'red', textAlign: 'left', fontWeight: 'bold' }}>R${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CatalogScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#250000', paddingHorizontal: 20, paddingTop: 20 }}>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image source={require('../../../assets/icon.png')} style={{ width: 100, height: 100, marginRight: 10 }} />
          <Text style={{ fontSize: 18, color: 'white', marginLeft: 'auto' }}>Nosso Catálogo:</Text>
        </View>

      
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Vinhos Argentinos</Text>
          <FlatList
            data={winesData.argentinos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <WineItem item={item} navigation={navigation} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>


      
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Vinhos brasileiros</Text>
          <FlatList
            data={winesData.brasileiros}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <WineItem item={item} navigation={navigation} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Vinhos uruguaios</Text>
          <FlatList
            data={winesData.uruguaios}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <WineItem item={item} navigation={navigation} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Vinhos chilenos</Text>
          <FlatList
            data={winesData.chilenos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <WineItem item={item} navigation={navigation} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
       

      </View>
    </ScrollView>
  );
};

export default CatalogScreen;