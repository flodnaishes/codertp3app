import React from 'react';
import { View, Text, Button } from 'react-native';

const pantalla3 = ({ navigation }) => {
  return (
    <View>
      <Text>pantalla3 </Text>
      <Button
        title="Ir a Inicio"
        onPress={() => navigation.navigate('pantalla1')}
      />
    </View>
  );
};

export default pantalla3;