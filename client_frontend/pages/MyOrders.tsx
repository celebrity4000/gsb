import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from '../Icons';
import supplement from '../assets/supplement.png';

const myorderData = [
  {
    productName: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
    deliveryStatus: 'delivered',
    quantity: 1,
  },
  {
    productName: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
    deliveryStatus: 'shipped',
    quantity: 1,
  },
  {
    productName: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
    deliveryStatus: 'shipped',
    quantity: 1,
  },
  {
    productName: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
    deliveryStatus: 'cancelled',
    quantity: 1,
  },
  {
    productName: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,

    deliveryStatus: 'shipped',
    quantity: 1,
  },
  {
    productName: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
    deliveryStatus: 'delivered',
    quantity: 1,
  },
  {
    productName: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
    deliveryStatus: 'shipped',
    quantity: 1,
  },
];

const MyOrders = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('TO RECEIVE');

  const filteredOrders = myorderData.filter(order => {
    if (selectedTab === 'TO RECEIVE') {
      return order.deliveryStatus === 'shipped';
    } else if (selectedTab === 'COMPLETED') {
      return order.deliveryStatus === 'delivered';
    } else if (selectedTab === 'CANCELLED') {
      return order.deliveryStatus === 'cancelled';
    }
  });

  const handleTabPress = tabName => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.Entypo name="chevron-left" size={30} color={'#FFA800'} />
        </TouchableOpacity>
        <Text style={styles.title}>My Orders</Text>
        <View style={{width: 40}}></View>
      </View>

      {/* option navigators  */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderColor: 'lightgray',
          paddingBottom: 10,
        }}>
        <TouchableOpacity
          style={[
            styles.navigateButton,
            selectedTab === 'TO RECEIVE' && {
              backgroundColor: '#FFA800',
            },
          ]}
          onPress={() => handleTabPress('TO RECEIVE')}>
          <Text
            style={[
              styles.navigateButtonText,
              selectedTab === 'TO RECEIVE' && {
                color: 'white',
              },
            ]}>
            TO RECEIVE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navigateButton,
            selectedTab === 'COMPLETED' && {backgroundColor: '#FFA800'},
          ]}
          onPress={() => handleTabPress('COMPLETED')}>
          <Text
            style={[
              styles.navigateButtonText,
              selectedTab === 'COMPLETED' && {
                color: 'white',
              },
            ]}>
            COMPLETED
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navigateButton,
            selectedTab === 'CANCELLED' && {backgroundColor: '#FFA800'},
          ]}
          onPress={() => handleTabPress('CANCELLED')}>
          <Text
            style={[
              styles.navigateButtonText,
              selectedTab === 'CANCELLED' && {
                color: 'white',
              },
            ]}>
            CANCELLED
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {filteredOrders.map((order, index) => (
          <View
            key={index}
            style={{
              //   backgroundColor: 'red',

              marginVertical: 30,
              flexDirection: 'column',
              width: '100%',
              borderWidth: 1,
              borderColor: 'lightgray',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                paddingHorizontal: 20,
                padding: 10,
              }}>
              <View>
                <Image source={order.image} style={{width: 100, height: 100}} />
              </View>
              <View
                style={{
                  // backgroundColor: 'red',
                  width: '70%',
                  paddingHorizontal: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                }}>
                <Text style={{fontWeight: '600', color: 'black'}}>
                  {order.productName}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FEF6F5',
                      width: 40,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      borderRadius: 12,
                    }}>
                    <Text style={{color: '#FFA800', fontWeight: '600'}}>
                      x {order.quantity}
                    </Text>
                  </View>
                  <Text style={{color: 'black', fontWeight: '600'}}>
                    RS {order.price}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopWidth: 1,
                borderColor: 'lightgray',
                marginTop: 10,
                padding: 10,
              }}>
              <View>
                <Text style={{color: '#FFA800'}}>
                  <Text style={{color: '#FFA800', fontSize: 12}}>
                    {order.quantity} Item
                  </Text>{' '}
                  |{' '}
                  <Text style={{color: '#FFA800', fontSize: 12}}>
                    RS {order.price}
                  </Text>
                </Text>
              </View>
              <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MyOrders;

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
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  navigateButton: {
    // backgroundColor: '#FFA800',

    padding: 10,
    borderRadius: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  navigateButtonText: {
    color: 'black',
    fontSize: 12,
  },
});
