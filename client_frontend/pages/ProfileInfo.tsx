import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from '../Icons';
import profile from '../assets/profile.png';
import {useNavigation} from '@react-navigation/native';

const UserProfileForm = () => {
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('+919656867412');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log('Form submitted:', {fullName, email, phoneNumber, address});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.title}>View Profile</Text>
        <View style={{width: 25}}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 50,
          position: 'relative',
        }}>
        <Image
          source={profile}
          style={{width: 150, height: 150, borderRadius: 100}}
        />
        <Icons.AntDesign
          name="edit"
          color={'#F6AF24'}
          size={30}
          style={{position: 'absolute', bottom: 45, right: '30%'}}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={text => setFullName(text)}
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={text => setAddress(text)}
          multiline
          placeholderTextColor={'gray'}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfileForm;

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
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 18,
    paddingHorizontal: 10,
    color: 'black',
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
