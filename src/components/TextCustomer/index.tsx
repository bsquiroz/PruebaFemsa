/* eslint-disable prettier/prettier */

import React from 'react';
import {Text} from 'react-native';
import {colors} from '../../theme';

interface props {
  text: string;
}

export const TextCustomer = ({text}: props) => {
  return <Text style={{color: colors.colorTextBg}}>{text}</Text>;
};
