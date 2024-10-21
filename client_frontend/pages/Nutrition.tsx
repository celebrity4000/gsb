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
import nutrition from '../assets/nutrition.png';

const MeditationData = [
  {
    title: 'How to get started',
    desc: 'Jump right in — get an overview of the basics and get started on building.',
    image: nutrition,
  },
  {
    title: 'How to get started',
    desc: 'Jump right in — get an overview of the basics and get started on building.',
    image: nutrition,
  },
  {
    title: 'How to get started',
    desc: 'Jump right in — get an overview of the basics and get started on building.',
    image: nutrition,
  },
  {
    title: 'How to get started',
    desc: 'Jump right in — get an overview of the basics and get started on building.',
    image: nutrition,
  },
  {
    title: 'How to get started',
    desc: 'Jump right in — get an overview of the basics and get started on building.',
    image: nutrition,
  },
  {
    title: 'How to get started',
    desc: 'Jump right in — get an overview of the basics and get started on building.',
    image: nutrition,
  },
  {
    title: 'How to get started',
    desc: 'Jump right in — get an overview of the basics and get started on building.',
    image: nutrition,
  },
];

const Nutrition = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'black', fontWeight: '800'}}>
          Diet
        </Text>
        <Image source={gsbLogo} />
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
          {MeditationData.map((item, index) => (
            <View
              key={index}
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: '#ffe6c6',
                borderRadius: 12,
                // padding: 10,
              }}>
              <View
                style={{
                  // alignItems: 'center',
                  //   backgroundColor: 'white',
                  marginTop: 15,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  width: '20%',
                  justifyContent: 'center',
                }}>
                {/* <Image
                  source={item.image}
                  style={{height: '100%', width: '100%', borderRadius: 18}}
                /> */}
                <Icons.FontAwesome
                  name="file-pdf-o"
                  color={'black'}
                  size={35}
                />
              </View>
              <View style={{padding: 10, width: '80%'}}>
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
                  <Icons.AntDesign
                    name="download"
                    color={'#FFA800'}
                    size={18}
                  />

                  <Text style={{color: '#FFA800', fontSize: 16}}>
                    Download pdf
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('TabNavigator');
          }}>
          <Text style={styles.buttonText}>Download PDF</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Nutrition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#F6AF24',
    borderRadius: 5,
    paddingVertical: 12,
    // marginHorizontal: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
