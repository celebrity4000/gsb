import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icons from '../Icons';
import gsbLogo from '../assets/gsbtransparent.png';
import {useNavigation} from '@react-navigation/native';
import supplement from '../assets/supplement.png';

const SupplementData = [
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
  {
    title: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
  },
];

const Supplement = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Image source={gsbLogo} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Icons.Feather name="shopping-bag" size={25} color={'black'} />
        </TouchableOpacity>
        {/* <Text style={{fontSize: 20, color: 'black', fontWeight: '800'}}>
          Fitness
        </Text> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // padding: 10,
          paddingHorizontal: 16,
        }}>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: '600',
            }}>
            {SupplementData.length} Items
          </Text>
          <Text style={{color: 'black'}}>Available in Stock</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20}}>
        <View style={styles.cardContainer}>
          {SupplementData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                // Handle press on card
              }}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.cardPrice}>INR {item.price}.00</Text>
                  <Icons.MaterialCommunityIcons
                    name="cart"
                    size={20}
                    color={'black'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: '48%', // Adjust based on your requirement
    borderWidth: 1,
    borderColor: '#FFA800',
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
  },
  cardImage: {
    height: 150,
    width: '80%',
    borderRadius: 12,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    // fontWeight: '600',
    color: 'black',
  },
  cardPrice: {
    fontSize: 16,
    color: 'black',
  },
});

export default Supplement;
