import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Modal } from "react-native";
import { CartContext } from '../../../src/CartContextProvider';

const Carrinho = () => {
  const { cartItems, decreaseQuantity, increaseQuantity, removeFromCart } = useContext(CartContext);
  const [cep, setCep] = useState('');
  const [showModal, setShowModal] = useState(false); 

  const renderCartItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={item.image}
        style={[styles.productImage, { marginTop: 10 }]} 
        resizeMode="contain"
      />
      <View style={styles.details}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>R$ {item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}> 
          <Text>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleBuyButtonPress = () => {
    setShowModal(true); 
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  return (
    <ScrollView style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>O carrinho está vazio</Text>
      ) : (
        <>
          <View style={styles.itemsContainer}>
            <Text style={styles.sectionTitle}>Items</Text>
            {cartItems.map((item) => (
              <View key={item.id}>
                {renderCartItem({ item })}
              </View>
            ))}
          </View>

          <View style={styles.totalContainer}>
            <Text style={styles.sectionTitle}>Total:</Text>
            <Text style={styles.totalAmount}>R$ {totalPrice.toFixed(2)}</Text>
          </View>

          <View style={styles.paymentContainer}>
            <Text style={[styles.sectionTitle, styles.boldText]}>PAGAMENTO</Text>
            <Text>Selecione a forma de pagamento</Text>
            <View style={styles.paymentOption}>
              <Image source={require('../../../assets/pix.png')} style={styles.paymentImage} />
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.alterarText}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cepContainer}>
            <Text style={[styles.sectionTitle, styles.boldText]}>CEP</Text>
            <Text>Simule o frete</Text>
            <TextInput
              style={styles.cepInput}
              placeholder="Digite o CEP"
              value={cep}
              onChangeText={(text) => setCep(text)}
            />
          </View>

          <TouchableOpacity style={styles.buyButton} onPress={handleBuyButtonPress}>
            <Text style={styles.buyButtonText}>COMPRAR</Text>
          </TouchableOpacity>
          <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Image
              source={require('../../../assets/check.png')}
              style={styles.checkImage}
            />
            <Text style={styles.modalText}>Compra realizada com sucesso!</Text>
          
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </>
      )}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center', 
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  checkImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButtonText: {
    color: 'blue',
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  itemsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  paymentContainer: {
    paddingTop: 20,
  },
  cepContainer: {
    paddingTop: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentOption: {
    color: 'black',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  paymentImage: {
    justifyContent:"flex-end",
    width: 60,
    height: 50,
    marginRight: 5,
  },
  alterarText: {
    color: 'blue',
  },
  cepInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    marginTop: 5,
  },
  buyButton: {
    backgroundColor: 'darkred',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    marginTop: 5,
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
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    },
});
  


export default Carrinho;
