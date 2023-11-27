import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from '../../../src/CartContextProvider'; 

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext); 

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDescriptionPress = () => {
    console.log('Abrir descripción');
  };

  const handleAdditionalInfoPress = () => {
    console.log('Abrir información adicional');
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.productImageWrapper}>
          <Image
            source={product.image}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsColumn}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>R${product.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.actionButtonText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity onPress={handleDescriptionPress}>
        <Text style={styles.clickableText}>Descricão</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAdditionalInfoPress}>
        <Text style={styles.clickableText}>Informação adicional</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  productImageWrapper: {
    backgroundColor: 'lightgray', 
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: 200,
    height: 200,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  detailsColumn: {
    flex: 1,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 28,
    marginTop: 0,
    color: 'red',
    fontWeight:'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 20,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  addToCartButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  actionButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    width: '100%',
    marginVertical: 15,
  },
  clickableText: {
    color: 'blue',
    fontSize: 16,
    marginTop: 10,
  },
});


export default ProductDetail;
