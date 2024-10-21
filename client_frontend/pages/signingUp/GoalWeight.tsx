import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../Icons';

const GoalWeight = () => {
  const navigation = useNavigation();

  const [height, setHeight] = useState<string>('');
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');

  const handleToggleUnit = () => {
    setUnit(unit === 'kg' ? 'lbs' : 'kg');
  };

  const handleHeightChange = (text: string) => {
    setHeight(text);
  };
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Step 6 of 8</Text>
      <Text style={styles.title}>What's your goal weight?</Text>

      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={handleToggleUnit}>
          <Text style={styles.toggleButtonText}>
            {unit === 'kg' ? 'LBS' : 'KG'}
          </Text>
          <Text style={styles.toggleButtonText}>
            {unit === 'lbs' ? 'LBS' : 'KG'}
          </Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={handleHeightChange}
            value={height}
            placeholder="60"
            placeholderTextColor={'black'}
          />
          <Text style={styles.unit}>|</Text>
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('GoalHeight');
        }}>
        <Text style={styles.buttonText}>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoalWeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  subcontainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    // paddingLeft: 20,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    // paddingLeft: 20,
    color: 'black',
  },
  button: {
    backgroundColor: '#F6AF24',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: '20%',
    color: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderRadius: 20,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '60%',
    justifyContent: 'center',
  },
  input: {
    width: 50,
    height: 40,
    paddingHorizontal: 10,
    color: 'black',
  },
  unit: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
