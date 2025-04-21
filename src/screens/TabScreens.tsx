import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/Button';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;
const SText = styled.Text`
  font-size: 30px;
`;

// 쌓여있는 스택을 초기화할 경우 reset !!

export const Mail = ({ route, navigation }) => {
  return (
    <Container>
      <SText>Mail</SText>
      <Button
        title={'Home'}
        onPress={() => navigation.reset({ routes: [{ name: 'List' }, { name: 'Home' }] })}
        // routes에 쌓인 순서대로 스택이 쌓임
      />
    </Container>
  );
};
export const Profile = ({ route, navigation }) => {
  return (
    <Container>
      <SText>Profile</SText>
      <Button
        title={'Home'}
        onPress={() => navigation.reset({ routes: [{ name: 'List' }, { name: 'Home' }] })}
        // routes에 쌓인 순서대로 스택이 쌓임
      />
    </Container>
  );
};
export const Setting = ({ route, navigation }) => {
  return (
    <Container>
      <SText>Setting</SText>
      <Button
        title={'Home'}
        onPress={() => navigation.reset({ routes: [{ name: 'List' }, { name: 'Home' }] })}
        // routes에 쌓인 순서대로 스택이 쌓임
      />
    </Container>
  );
};
