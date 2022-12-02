/* eslint-disable prettier/prettier */
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';

import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../theme';
import {stylesGlobal} from '../theme/stylesGlobal';
import {TextCustomer} from '../components/TextCustomer';
import {TitleCustomer} from '../components/TitleCustomer';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const DetailScreem = ({
  navigation,
  route: {
    params: {image, is_redemption, price, product},
  },
}: Props) => {
  return (
    <View style={styles.containerDetail}>
      <View style={{...styles.title, ...styles.center}}>
        <TitleCustomer text={`Compra: ${product}`} />
      </View>

      <View style={{...styles.center, ...styles.info}}>
        <Image source={{uri: image}} style={styles.styleImage} />
        <TextCustomer text={is_redemption ? 'Ganaste' : 'Canjeaste'} />
        <TextCustomer text={`${price} Puntos`} />
      </View>

      <View
        style={{
          ...styles.btn,
          ...styles.center,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={stylesGlobal.styleBtn}>
          <TextCustomer text={'Regresar'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    padding: 20,
  },

  title: {
    flex: 1,
  },

  info: {
    flex: 2,
    backgroundColor: colors.colorPrimary,
    justifyContent: 'space-around',
    borderRadius: 20,
  },

  btn: {
    flex: 1,
  },

  styleImage: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
