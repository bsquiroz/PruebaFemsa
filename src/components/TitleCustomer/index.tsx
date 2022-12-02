/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../theme';

interface Props {
  text: string;
}

export const TitleCustomer = ({text}: Props) => {
  return <Text style={styles.titleCustomer}>{text}</Text>;
};

const styles = StyleSheet.create({
  titleCustomer: {fontSize: 25, color: colors.colorText, fontWeight: 'bold'},
});
