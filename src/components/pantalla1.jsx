import React from 'react';
import { View, Text, Button } from 'react-native';

const pantalla1 = ({ navigation }) => {
  return (
    <View>
      <Text>pantalla1</Text>
      <Button
        title="pantalla2"
        onPress={() => navigation.navigate('pantalla2')}
      />
    </View>
  );
};

export default pantalla1;