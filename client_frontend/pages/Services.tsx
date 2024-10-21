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
import service from '../assets/service.png';

const ServiceData = [
  {
    title: `IBS Colitis & Crohn's`,
    desc: 'IBS (irritable bowel syndrome) is a lifestyle disorder that affects the gastrointestinal tract and large intestine (colon).',
    image: service,
  },
  {
    title: 'DIABETES',
    desc: 'Type 2 diabetes is a chronic metabolic disorder characterised by insulin resistance and relative insulin deficiency.',
    image: service,
  },
  {
    title: 'Mental Depression',
    desc: `IBD stands for Inflammatory Bowel Disease. It's a term used to describe chronic inflammation of the digestive tract.`,
    image: service,
  },
];

const Services = () => {
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

      <View style={{marginLeft: 20}}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
          GSBpathy Services
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFA800',
            padding: 5,
            paddingVertical: 10,
            width: '45%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            borderRadius: 12,
          }}>
          <Icons.Ionicons name="call" size={20} />
          <Text style={{fontWeight: '800', fontSize: 18}}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFA800',
            padding: 5,
            paddingVertical: 10,
            width: '45%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            borderRadius: 12,
          }}>
          <Icons.Feather name="message-square" size={20} />
          <Text style={{fontWeight: '800', fontSize: 18}}>Message</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20, marginBottom: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
            // paddingLeft: 10,
            marginTop: 20,
            // backgroundColor: 'red',
            marginBottom: 20,
          }}>
          {ServiceData.map((item, index) => (
            <View
              key={index}
              style={{
                width: '100%',
                flexDirection: 'column',
                gap: 10,
                // backgroundColor: '#ffe6c6',
                borderRadius: 12,
                // padding: 10,
                borderColor: '#FFA800',
                borderWidth: 1,
                marginBottom: 20,
              }}>
              <View
                style={{
                  height: 250,
                  width: '100%',
                  alignItems: 'center',
                  //   backgroundColor: 'white',
                  marginTop: 15,
                  paddingHorizontal: 10,
                }}>
                <Image
                  source={item.image}
                  style={{height: '100%', width: '100%', borderRadius: 18}}
                />
              </View>
              <View style={{padding: 10, width: '100%', gap: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
                  {item.title}
                </Text>
                <Text style={{color: 'black'}}>{item.desc}</Text>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#FFA800', fontSize: 16}}>
                    View Details
                  </Text>
                  <Icons.Feather
                    name="arrow-up-right"
                    color={'#FFA800'}
                    size={18}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
