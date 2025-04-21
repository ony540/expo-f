import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TextInput, Text } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import styled, { ThemeProvider } from 'styled-components/native';
import { Shadow } from '../components/Shadow';

const Container = styled.View<{ theme: { bgColor } }>`
  flex: 1;
  background-color: ${(p) => p.theme.bgColor};
`;
const lightTheme = {
  bgColor: '#e3e3e3',
};
const darkTheme = {
  bgColor: '#111',
};

export const Theme = () => {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Container>
        <StatusBar style="auto" />
        <Text style={{ color: '#fff' }}>안녕</Text>
        <Switch value={isLight} onValueChange={(isLight) => setIsLight(isLight)} />
        <TextInput placeholder="type  a message" />
        <Shadow />
      </Container>
    </ThemeProvider>
  );
};
