/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PropsMoves} from '../../interfaces';

export const Move = ({product, image, is_redemption, price}: PropsMoves) => {
  const navigation = useNavigation();

  const colorPrice = is_redemption ? {color: 'green'} : {color: 'red'};

  return (
    <TouchableOpacity
      style={styles.styleMove}
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate(
          'Detail' as never,
          {product, image, is_redemption, price} as never,
        )
      }>
      <View>
        <Image source={{uri: image}} style={styles.styleImage} />
      </View>

      <Text>{product}</Text>

      <Text style={colorPrice}>
        {is_redemption ? '+' : '-'} ${price}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  styleMove: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  styleImage: {
    flex: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});
