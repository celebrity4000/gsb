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
import {useNavigation} from '@react-navigation/native';
import success1 from '../assets/home/success1.png';
import success2 from '../assets/home/success2.png';

const MySuccessStories = () => {
  const navigation = useNavigation();
  const Success = [
    {
      title: 'Story of Gurpreet Singh Batra',
      desc: 'Injured and Depression to Founder of GSBPATHY',
      image: success1,
    },
    {
      title: 'Fitness is key of Success',
      desc: 'Injured and Depression to Founder of GSBPATHY',
      image: success2,
    },
    {
      title: 'Story of Gurpreet Singh Batra',
      desc: 'Injured and Depression to Founder of GSBPATHY',
      image: success1,
    },
    {
      title: 'Fitness is key of Success',
      desc: 'Injured and Depression to Founder of GSBPATHY',
      image: success2,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.title}>My Success Stories</Text>
        <View style={{width: 25}}></View>
      </View>
      <ScrollView
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          flexWrap: 'wrap',
          //   width: '100%',
          //   justifyContent: 'space-between',
          // paddingLeft: 10,
          marginTop: 20,
          //   backgroundColor: 'red',
          marginBottom: 20,
          marginHorizontal: 20,
        }}>
        {Success.map((item, index) => (
          <View
            key={index}
            style={{
              width: '100%',
              // flexDirection: 'row',
              // justifyContent: '',
              // backgroundColor: '#ffe6c6',
              borderRadius: 15,
              // padding: 10,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              //   backgroundColor: 'red',
              marginBottom: 20,
            }}>
            <View
              style={{
                height: 220,
                width: '100%',
                alignItems: 'center',
                //   backgroundColor: 'white',
                marginTop: 15,
                //   padding: 20,
              }}>
              <Image
                source={item.image}
                style={{height: '100%', width: '100%', borderRadius: 16}}
              />
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
                {item.title}
              </Text>
              <Text style={{color: 'black'}}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={{padding: 20}}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigation.navigate('AddMySuccessStory');
          }}>
          <Text style={styles.submitButtonText}>Add Story</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MySuccessStories;

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
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#F6AF24',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
