import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../Icons';

const Verification = () => {
  const et1 = useRef<TextInput>(null);
  const et2 = useRef<TextInput>(null);
  const et3 = useRef<TextInput>(null);
  const et4 = useRef<TextInput>(null);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Verify Account</Text>
      <Text style={styles.subtitle}>
        Verify your account by entering verification code we sent to
        johnwelles@gmail.com
      </Text>

      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={styles.inputView}
          maxLength={1}
          keyboardType="phone-pad"
          onChangeText={txt => {
            if (txt.length >= 1) {
              et2.current?.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={styles.inputView}
          maxLength={1}
          keyboardType="phone-pad"
          onChangeText={txt => {
            if (txt.length >= 1) {
              et3.current?.focus();
            } else if (txt.length < 1) {
              et1.current?.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={styles.inputView}
          maxLength={1}
          keyboardType="phone-pad"
          onChangeText={txt => {
            if (txt.length >= 1) {
              et4.current?.focus();
            } else if (txt.length < 1) {
              et2.current?.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={styles.inputView}
          maxLength={1}
          keyboardType="phone-pad"
          onChangeText={txt => {
            if (txt.length < 1) {
              et3.current?.focus();
            }
          }}
        />
      </View>

      <Text style={styles.resend}>Resend</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Name');
        }}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 50,
    // paddingLeft: 20,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    // paddingLeft: 20,
    color: 'black',
  },
  otpView: {
    width: '100%',
    // height: '20%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '40%',
  },
  inputView: {
    height: 40,
    width: 40,
    borderWidth: 1,
    marginLeft: 20,
    borderRadius: 10,
    textAlign: 'center',
    color: 'black',
  },
  resend: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#F6AF24',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: '20%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
