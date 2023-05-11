import React from 'react';
import { View, Text, Button } from 'react-native';

const pantalla2 = ({ navigation }) => {
  return (
    <View>
      <Text>pantalla2</Text>
      <Button
        title="Ir a pantalla3"
        onPress={() => navigation.navigate('pantalla3')}
      />
    </View>
  );
};

export default AboutScreen;