import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from '../Icons';
import gsbLogo from '../assets/gsbtransparent.png';
import {Icon} from 'react-native-vector-icons/Icon';

const Notification = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Notification');

  const orderNotification = [
    {
      id: 1,
      username: 'Gurpreet Singh',
      productName: 'GSB Anti Diarrhoeal',
      timestamp: '2024-05-06T12:30:00Z',
    },
    {
      id: 2,
      username: 'Gurpreet Singh',
      productName: 'GSB Anti Diarrhoeal',
      timestamp: '2024-05-06T15:45:00Z',
    },
    {
      id: 3,
      username: 'Gurpreet Singh',
      productName: 'GSB Anti Diarrhoeal',
      timestamp: '2024-05-05T18:20:00Z',
    },
    {
      id: 4,
      username: 'Gurpreet Singh',
      productName: 'GSB Anti Diarrhoeal',
      timestamp: '2024-05-07T10:30:00Z',
    },
    {
      id: 5,
      username: 'Gurpreet Singh',
      productName: 'GSB Anti Diarrhoeal',
      timestamp: '2024-05-04T12:30:00Z',
    },
    {
      id: 6,
      username: 'Gurpreet Singh',
      productName: 'GSB Anti Diarrhoeal',
      timestamp: '2024-05-03T12:30:00Z',
    },
  ];

  const Messages = [
    {
      id: 1,
      username: 'Gurpreet Singh',
      message: 'Hello sir, I want to order',
      timestamp: '2024-05-03T12:30:00Z',
    },
    {
      id: 2,
      username: 'Gurpreet Singh',
      message: 'Hello sir, I want to order',
      timestamp: '2024-05-03T12:30:00Z',
    },
    {
      id: 3,
      username: 'Gurpreet Singh',
      message: 'Hello sir, I want to order',
      timestamp: '2024-05-03T12:30:00Z',
    },
  ];

  const getTimeDifference = timestamp => {
    const givenTime = new Date(timestamp);
    const timeDifference = Date.now() - givenTime;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return ` ${days} days ago`;
    } else if (hours > 0) {
      return ` ${hours} hours ago`;
    } else if (minutes > 0) {
      return ` ${minutes} minutes ago`;
    } else {
      return ` ${givenTime}`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
        <Image source={gsbLogo} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Notification' && {
              borderBottomColor: '#FFA800',
              borderBottomWidth: 2,
            },
          ]}
          onPress={() => setSelectedTab('Notification')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Notification' && {color: '#FFA800'},
            ]}>
            Notification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Messages' && {
              borderBottomColor: '#FFA800',
              borderBottomWidth: 2,
            },
          ]}
          onPress={() => setSelectedTab('Messages')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Messages' && {color: '#FFA800'},
            ]}>
            Messages(3)
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'Notification' &&
        orderNotification.map((order, index) => (
          <View style={styles.notificationItem} key={index}>
            <View style={styles.avatarContainer}>
              <Icons.MaterialCommunityIcons
                name="account"
                color={'black'}
                size={40}
              />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationText}>
                <Text style={styles.username}>{order.username} </Text>
                placed an order of{' '}
                <Text style={styles.productName}>{order.productName} </Text>
              </Text>
              <Text style={styles.timestamp}>
                {getTimeDifference(order.timestamp)}
              </Text>
            </View>
          </View>
        ))}

      {selectedTab === 'Messages' &&
        Messages.map((order, index) => (
          <View style={styles.notificationItem} key={index}>
            <View style={styles.avatarContainer}>
              <Icons.MaterialCommunityIcons
                name="account"
                color={'black'}
                size={40}
              />
            </View>
            <View style={styles.notificationContent}>
              <View style={{paddingLeft: 5}}>
                <Text style={styles.username}>{order.username} </Text>

                <Text style={styles.message}>{order.message} </Text>
              </View>

              <Text style={[styles.timestamp]}>
                {getTimeDifference(order.timestamp)}
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
};

export default Notification;

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
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  tab: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: 'gray',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: 'rgba(255, 168, 0, 0.1)',
    borderRadius: 12,
    borderColor: '#FFA800',
    borderWidth: 1,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'gray',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationContent: {
    marginLeft: 15,
    flex: 1,
  },
  notificationText: {
    color: 'gray',
  },
  username: {
    color: 'black',
  },
  productName: {
    color: 'black',
  },
  message: {
    color: 'gray',
  },
  timestamp: {
    color: 'gray',
  },
});
