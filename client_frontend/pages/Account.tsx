import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from '../Icons';
import profile from '../assets/profile.png';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.Entypo name="chevron-left" size={30} color={'#FFA800'} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <View style={{width: 40}}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
          {/* <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#fec6ad',
              borderRadius: 50,
            }}
          /> */}
          <Image
            source={profile}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
          <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
            John Doe
          </Text>
        </View>
        {/* <Icons.Feather name="edit" color={'#FFA800'} size={25} /> */}
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#f7f8fa',
            flexDirection: 'column',
            gap: 15,
            paddingVertical: 20,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileInfo');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.MaterialCommunityIcons
                  name="account"
                  color={'#fec6ad'}
                  size={25}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>Personal Info</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MySuccessStories');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.Entypo name="map" color={'#fec6ad'} size={20} />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>My story</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#f7f8fa',
            flexDirection: 'column',
            gap: 15,
            paddingVertical: 20,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.Feather
                  name="shopping-bag"
                  color={'#fec6ad'}
                  size={25}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>Cart</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.Ionicons
                  name="notifications-outline"
                  color={'#fec6ad'}
                  size={25}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>Notification</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PaymentMethod');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.AntDesign
                  name="creditcard"
                  color={'#fec6ad'}
                  size={25}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>Payment Method</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Consultant');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.MaterialCommunityIcons
                  name="account"
                  color={'#fec6ad'}
                  size={25}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>Consultant</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Services');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.Ionicons name="call" color={'#fec6ad'} size={25} />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>Call</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Services');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.Feather
                  name="message-square"
                  color={'#fec6ad'}
                  size={25}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>Messages</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#f7f8fa',
            flexDirection: 'column',
            gap: 15,
            paddingVertical: 20,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyOrders');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.AntDesign
                  name="shoppingcart"
                  color={'#fec6ad'}
                  size={25}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>My Order</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MySubscription');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.MaterialIcons
                  name="workspace-premium"
                  color={'#fec6ad'}
                  size={20}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>
                My Subscription
              </Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#f7f8fa',
            flexDirection: 'column',
            gap: 15,
            paddingVertical: 20,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.FontAwesome
                  name="sign-out"
                  color={'#fec6ad'}
                  size={25}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14}}>Log Out</Text>
            </View>
            <Icons.Entypo name="chevron-right" color={'#FFA800'} size={25} />
          </View>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
    </View>
  );
};

export default Account;

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
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
});
