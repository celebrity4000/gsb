import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icons from '../Icons';

const AddMySuccessStory = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  const handleImageUpload = () => {
    // Logic to upload image
    console.log('Image uploaded:', image);
  };

  const handleTextSubmit = () => {
    // Logic to submit text
    console.log('Text submitted:', text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.title}>Add Story</Text>
        <View style={{width: 25}}></View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.inputContainer, styles.imageInput]}
          onPress={handleImageUpload}>
          {image ? (
            <Text style={styles.imageText}>Image Uploaded</Text>
          ) : (
            <View
              style={{flexDirection: 'column', alignItems: 'center', gap: 5}}>
              <Icons.MaterialIcons
                name="add-a-photo"
                color={'#F6AF24'}
                size={30}
              />
              <Text style={styles.imageText}>Upload Image</Text>
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          style={[styles.inputContainer, styles.textInput]}
          placeholder="Enter your story here..."
          multiline
          value={text}
          onChangeText={setText}
          placeholderTextColor={'gray'}
        />
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleTextSubmit}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMySuccessStory;

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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'black',
  },
  imageInput: {
    borderStyle: 'dotted',
    borderWidth: 2, // Increase border width for spacing between dots
    borderColor: 'gray', // Same as container border color
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    textAlign: 'center',
    color: 'gray',
  },
  textInput: {
    height: 150, // Increase the height as needed
    textAlignVertical: 'top', // Ensure text starts from the first line
  },
  uploadButton: {
    backgroundColor: '#F6AF24',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
