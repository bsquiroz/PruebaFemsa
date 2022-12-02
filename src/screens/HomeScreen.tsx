/* eslint-disable prettier/prettier */
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {BtnFilter} from '../components/BtnFilter';
import {Moves} from '../components/Moves';
import {TextCustomer} from '../components/TextCustomer';
import {TitleCustomer} from '../components/TitleCustomer';
import {useMove} from '../hooks/useMove';
import {colors} from '../theme';

export const HomeScreen = () => {
  const {handleFilters, isLoading, moveFilter, moves} = useMove();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TextCustomer text="Bienvenido!" />
        <TextCustomer text="Brayan stiven muñoz" />
        <TextCustomer text="Cumpleaños: 2 de abril" />
      </View>

      <View style={styles.containerInfo}>
        <TitleCustomer text={'Tus movimientos'} />

        {isLoading ? (
          <Text>Cargando la informacion...</Text>
        ) : (
          <Moves moves={moveFilter.length ? moveFilter : moves} />
        )}
      </View>

      <View style={styles.containerOptions}>
        <BtnFilter
          handleFilters={handleFilters}
          textBtn={'Canjeados'}
          textFilter={'canjeados'}
        />
        <BtnFilter
          handleFilters={handleFilters}
          textBtn={'Ganados'}
          textFilter={'ganados'}
        />
        <BtnFilter
          handleFilters={handleFilters}
          textBtn={'Ver todos'}
          textFilter={'todos'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerHeader: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  containerInfo: {
    padding: 20,
    flex: 4,
  },

  containerOptions: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
