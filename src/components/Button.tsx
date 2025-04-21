import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

export const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.tit}> {title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    padding: 10,
    margin: 10,
  },
  tit: {
    fontSize: 24,
    color: '#fff',
  },
});
