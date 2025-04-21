import React from 'react';
import { Platform, Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export const Shadow = () => {
  return (
    <View style={styles.shadow}>
      <Text>{Platform.OS}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      web: {
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20, // 안드로이드에서 섀도우
      },
    }),
  },
});
