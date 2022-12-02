/* eslint-disable prettier/prettier */
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreem} from '../screens/DetailScreem';
import {PropsMoveDetail} from '../interfaces';

export type RootStackParams = {
  Home: undefined;
  Detail: PropsMoveDetail;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreem} />
    </Stack.Navigator>
  );
};
