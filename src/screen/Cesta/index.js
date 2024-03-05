import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import Topo from '../Cesta/components/Topo'
import Detalhes from './components/Detalhes';

const width = Dimensions.get('screen').width;

export default function Cesta({topo, detalhes}) {
  return <>
    
    <Topo {...topo} />

    <View style={estilos.cesta}>
      <Detalhes {...detalhes} />
    </View>
  </>
}

const estilos = StyleSheet.create({

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,}
  });