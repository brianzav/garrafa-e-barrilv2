import React from "react";
import { View, Text, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";
import Carousel from 'react-native-snap-carousel';

const carouselData = [
  { id: '1', image: require('../../../assets/carrousel1.png') },
  { id: '2', image: require('../../../assets/carrousel2.png') },
  { id: '3', image: require('../../../assets/carrousel3.png') },  
];

const winesData = [
  { id: '1', name: 'Guaspari Syrah Vista', price: '20', image: require('../../../assets/argentino1.png') },
  { id: '2', name: 'La Flor de Pulenta', price: '25', image: require('../../../assets/argentino2.png') },
  { id: '3', name: 'Vinho Pérgola', price: '25', image: require('../../../assets/argentino5.png') },
  { id: '4', name: 'Vinho Gostissia', price: '90', image: require('../../../assets/uruguaio3.png') },
  { id: '5', name: 'Vinho Manaos', price: '1o5', image: require('../../../assets/brasileiro5.png') },
];

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
          <Text style={{ color: 'black', marginTop: 5, textAlign: 'left', fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ color: 'red', textAlign: 'left', fontWeight: 'bold' }}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const renderCarouselItem = ({ item }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ width: '100%', height: 200 }}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderMostWantedItem = ({ item }) => {
    return (
      <WineItem item={item} navigation={navigation} />
    );
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#250000' }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image source={require('../../../assets/icon.png')} style={{ width: 100, height: 100, marginRight: 10 }} />
            <Text style={{ fontSize: 18, color: 'white', marginLeft: 'auto' }}>Bem-Vindo</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
            <TextInput
              style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 10, backgroundColor: 'white', color: 'black' }}
              placeholder="O que você procura?"
            />
            <Image source={require('../../../assets/splash.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
          </View>

          <View style={{ marginVertical: 20 }}>
            <Carousel
              data={carouselData}
              renderItem={renderCarouselItem}
              sliderWidth={400}
              itemWidth={300}
              loop={true}
              autoplay={true}
              autoplayInterval={3000}
            />
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Mais procurados</Text>
            <FlatList
              data={winesData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderMostWantedItem}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, color: 'white' }}>Promoções</Text>
            <Image source={require('../../../assets/promocao.png')} style={{ width: '100%', height: 200, marginTop: 10 }} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
