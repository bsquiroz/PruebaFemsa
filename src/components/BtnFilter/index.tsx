/* eslint-disable prettier/prettier */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {stylesGlobal} from '../../theme/stylesGlobal';
import {TextCustomer} from '../TextCustomer';

interface Props {
  handleFilters: (str: string) => void;
  textFilter: string;
  textBtn: string;
}
export const BtnFilter = ({handleFilters, textBtn, textFilter}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => handleFilters(textFilter)}
      style={stylesGlobal.styleBtn}>
      <TextCustomer text={textBtn} />
    </TouchableOpacity>
  );
};
