/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {PropsMoves} from '../../interfaces';
import {Move} from '../Move';

interface Props {
  moves: PropsMoves[];
}

export const Moves = ({moves}: Props) => {
  return (
    <FlatList
      style={styles.stylesMove}
      data={moves}
      renderItem={({item}: any) => (
        <Move
          id={item.id.toString()}
          product={item.product}
          price={item.price}
          image={item.image}
          is_redemption={item.is_redemption}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  stylesMove: {
    marginTop: 20,
  },
});
