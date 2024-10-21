/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignUp from './pages/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Verification from './pages/signingUp/Verification';
import Age from './pages/signingUp/Age';
import Weight from './pages/signingUp/Weight';
import GoalHeight from './pages/signingUp/GoalHeight';
import GoalWeight from './pages/signingUp/GoalWeight';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Notification from './pages/Notification';
import Cart from './pages/Cart';
import Account from './pages/Account';
import TabNavigator from './navigator/TabNavigator';
import Meditation from './pages/Meditation';
import Education from './pages/Education';
import Nutrition from './pages/Nutrition';
import Services from './pages/Services';
import Consultant from './pages/Consultant';
import Supplement from './pages/Supplement';
import Fitness from './pages/Fitness';
import GetStarted from './pages/signingUp/GetStarted';
import Goal from './pages/signingUp/Goal';
import FirstForm from './pages/signingUp/FirstForm';
import Subscription from './pages/Subscription';
import PaymentMethod from './pages/payment/PaymentMethod';
import PaymentOtp from './pages/payment/PaymentOtp';
import PaymentSuccess from './pages/payment/PaymentSuccess';
import Name from './pages/signingUp/Name';
import MyOrders from './pages/MyOrders';
import MySubscription from './pages/MySubscription';
import ProfileInfo from './pages/ProfileInfo';
import SuccessStories from './pages/SuccessStories';
import MySuccessStories from './pages/MySuccessStories';
import AddMySuccessStoriy from './pages/AddMySuccessStory';
import AddMySuccessStory from './pages/AddMySuccessStory';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Weight" component={Weight} />
        <Stack.Screen name="GoalHeight" component={GoalHeight} />
        <Stack.Screen name="GoalWeight" component={GoalWeight} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Goal" component={Goal} />
        <Stack.Screen name="FirstForm" component={FirstForm} />

        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Account" component={Account} />

        <Stack.Screen name="Meditation" component={Meditation} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Diet" component={Nutrition} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="MySubscription" component={MySubscription} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
        <Stack.Screen name="SuccessStories" component={SuccessStories} />
        <Stack.Screen name="MySuccessStories" component={MySuccessStories} />
        <Stack.Screen name="AddMySuccessStory" component={AddMySuccessStory} />

        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Consultant" component={Consultant} />
        <Stack.Screen name="Supplement" component={Supplement} />
        <Stack.Screen name="Fitness" component={Fitness} />

        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="PaymentOtp" component={PaymentOtp} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
