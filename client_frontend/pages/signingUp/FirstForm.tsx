import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../Icons';
import gsbLogo from '../../assets/gsbtransparent.png';

const ServiceData = [
  {
    question: 'Do you have IBS?',
    answers: ['Yes', 'No'],
    singleChoice: true,
  },
  {
    question: 'Which Type Of IBS You Have?',
    answers: ['IBS-C', 'IBS-B', 'IBS-M'],
    singleChoice: false,
  },
  {
    question: 'What Are Your Symptoms?',
    answers: [
      'Diarrhea with mucus',
      'Constipation',
      'Excessive gas & bloating',
      'Abdominal',
      'Stress',
      'Anxiety',
      'Overthinking',
      'Irritable',
      'Lack of focus',
      'Disrub sleeping pattern',
      'Weight loss',
    ],
    singleChoice: false,
  },
  {
    question: 'How is the environment of your family?',
    answers: ['Stressfull', 'Happy', 'All of Them'],
    singleChoice: true,
  },
  {
    question: 'How long have you had this problem?',
    answers: ['6-12 Month', 'More than 1 Year', 'More than 5 Year', 'Other'],
    singleChoice: true,
  },
  {
    question: 'Have you taken any treatment have you taken ?',
    answers: ['Allopathy', 'Homeopathic', 'Ayurvedic', 'All'],
    singleChoice: false,
  },
  {
    question: 'Which type of test have you taken?',
    answers: [
      'Sonography',
      'Ultrasound',
      'Endoscopy',
      'CBC',
      'LFT',
      'Thyroid profile',
      'KFT',
      'Lipid profile',
    ],
    singleChoice: false,
  },
  {
    question: 'How is your lifestyle?',
    answers: ['Alcohol', 'Smoking', 'Bad foods habit', 'All'],
    singleChoice: false,
  },
];

const FirstForm = () => {
  const navigation = useNavigation();
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array.from({length: ServiceData.length}, () => new Set()),
  );

  // const handleAnswerSelect = (questionIndex, answerIndex) => {
  //   const newSelectedAnswers = [...selectedAnswers];
  //   const selectedSet = new Set(selectedAnswers[questionIndex]);
  //   if (selectedSet.has(answerIndex)) {
  //     selectedSet.delete(answerIndex);
  //   } else {
  //     selectedSet.add(answerIndex);
  //   }
  //   newSelectedAnswers[questionIndex] = selectedSet;
  //   setSelectedAnswers(newSelectedAnswers);
  // };

  const handleSingleChoiceSelect = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = new Set([answerIndex]);
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleMultipleChoiceSelect = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    const selectedSet = newSelectedAnswers[questionIndex];
    if (selectedSet.has(answerIndex)) {
      selectedSet.delete(answerIndex);
    } else {
      selectedSet.add(answerIndex);
    }
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    if (ServiceData[questionIndex].singleChoice) {
      handleSingleChoiceSelect(questionIndex, answerIndex);
    } else {
      handleMultipleChoiceSelect(questionIndex, answerIndex);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Image source={gsbLogo} />
        <TouchableOpacity>
          {/* <Icons.Feather name="shopping-bag" size={25} color={'black'} /> */}
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 20,
          marginBottom: 20,
        }}>
        {ServiceData.map((item, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            <View
              style={{
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#FFA800',
                padding: 10,
                // backgroundColor: 'red',
              }}>
              {item.answers.map((answer, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.answer}
                  onPress={() => handleAnswerSelect(index, i)}>
                  <View
                    style={[
                      styles.checkbox,
                      {
                        backgroundColor: selectedAnswers[index].has(i)
                          ? '#F6AF24'
                          : 'transparent',
                      },
                    ]}
                  />
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabNavigator');
          }}
          style={{
            backgroundColor: '#F6AF24',
            padding: 16,
            alignItems: 'center',
            borderRadius: 12,
            marginBottom: 20,
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
            SUMBIT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FirstForm;

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
    paddingHorizontal: 16,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: 'gray',
  },
  answerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  answer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    // margin: 4,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedAnswer: {
    backgroundColor: '#F6AF24',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  answerText: {
    fontSize: 16,
    color: 'black',
  },
});
