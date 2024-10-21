import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from '../Icons';
import gsbLogo from '../assets/gsbtransparent.png';
import supplement from '../assets/supplement.png';
import LinearGradient from 'react-native-linear-gradient';

const CartData = [
  {
    title: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
  },
  {
    title: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
  },
];

const Cart = ({navigation}: {navigation: any}) => {
  const [receiverName, setReceiverName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <LinearGradient
      colors={['white', '#FFA800']}
      locations={[0.95, 1]}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cart</Text>
        <Image source={gsbLogo} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20, marginBottom: 20}}>
        {CartData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.itemImage} />
            </View>
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>INR {item.price}.00</Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Icons.AntDesign
                    name="upcircleo"
                    color={'#FFA800'}
                    size={18}
                  />
                </TouchableOpacity>
                <Text style={styles.quantityText}>1</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Icons.AntDesign
                    name="downcircleo"
                    color={'#FFA800'}
                    size={18}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity>
                  <Icons.MaterialCommunityIcons
                    name="delete-outline"
                    size={25}
                    color={'red'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Delivery Address</Text>
            <Icons.AntDesign name="right" size={16} color={'black'} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Receiver Information</Text>
            <Icons.AntDesign name="right" size={16} color={'black'} />
          </View>
          {/* Add name input field */}
          <TextInput
            style={styles.input}
            placeholder="Receiver's Name"
            value={receiverName}
            onChangeText={setReceiverName}
            placeholderTextColor={'black'}
          />
          {/* Add phone number input field */}
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholderTextColor={'black'}
            keyboardType="phone-pad"
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('PaymentMethod');
        }}>
        <Text style={styles.buttonText}>CHECK OUT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFA800',
    padding: 10,
    elevation: 15,
    shadowColor: '#FFA800',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 20,
  },
  imageContainer: {
    height: 120,
    width: '30%',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFA800',
    paddingHorizontal: 10,
  },
  itemImage: {
    height: '100%',
    width: '100%',
    borderRadius: 18,
  },
  itemDetails: {
    padding: 10,
    width: '70%',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  itemPrice: {
    color: 'black',
    fontWeight: '600',
  },
  quantityContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    gap: 5,
  },
  quantityButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    color: '#FFA800',
    fontSize: 16,
  },
  infoContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFA800',
    padding: 12,
    marginBottom: 20,
    minHeight: 120, // Set a minimum height to prevent overflow
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#F6AF24',
    borderRadius: 5,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 10,
  },
});
