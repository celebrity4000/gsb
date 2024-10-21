// import {StyleSheet, View} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../pages/Home';
// import Notification from '../pages/Notification';
// import Cart from '../pages/Cart';
// import Account from '../pages/Account';
// import Icons from '../Icons';
// import LinearGradient from 'react-native-linear-gradient';
// import {BlurView} from '@react-native-community/blur';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     // <View style={{position: 'relative', height: '100%'}}>

//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#FFA800',
//         tabBarInactiveTintColor: 'black',
//         tabBarStyle: styles.tabBarStyle,
//         tabBarLabelStyle: {
//           backgroundColor: 'transparent', // Set background color of label area to transparent
//         },
//         tabBarBackground: () => (
//           <BlurView
//             overlayColor=""
//             blurAmount={10}
//             style={styles.blurViewStyles}
//           />
//         ),
//       }}>
//       <Tab.Screen
//         name="HOME"
//         component={Home}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icons.Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="NOTIFICATION"
//         component={Notification}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icons.Ionicons name="notifications" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="CART"
//         component={Cart}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icons.MaterialCommunityIcons
//               name="cart"
//               size={size}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ACCOUNT"
//         component={Account}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icons.MaterialCommunityIcons
//               name="account"
//               size={size}
//               color={color}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     // </View>
//   );
// };

// export default TabNavigator;

// const styles = StyleSheet.create({
//   blur: {
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     height: '100%',
//     width: '100%',
//   },
//   gradient: {
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     height: '5%',
//     width: '100%', // Adjust width to cover the container
//     elevation: -2,
//   },
//   tabBarStyle: {
//     position: 'absolute',
//     backgroundColor: 'transparent',
//     borderTopWidth: 0,
//     elevation: 0,
//     borderTopColor: 'transparent',
//   },
//   blurViewStyles: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: '100%',
//   },
// });

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Notification from '../pages/Notification';
import Cart from '../pages/Cart';
import Account from '../pages/Account';
import Icons from '../Icons';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFA800',
        tabBarInactiveTintColor: 'black',
        // tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: {
          backgroundColor: 'transparent', // Set background color of label area to transparent
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons.Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NOTIFICATION"
        component={Notification}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons.Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CART"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="cart"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ACCOUNT"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="account"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  // gradient: {
  //   position: 'absolute',
  //   right: 0,
  //   bottom: 0,
  //   height: '5%',
  //   width: '100%', // Adjust width to cover the container
  //   elevation: -2,
  // },
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    paddingVertical: 8,

    // borderTopColor: 'transparent',
  },
});
