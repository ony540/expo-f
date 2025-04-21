import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/Button';

const Container = styled.View`
  align-items: center;
  
`;
const SText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

// 쌓여있는 스택을 초기화할 경우 reset !!

const Chat = ({ route, navigation }) => {
  return (
    <Container>
      <SText>Chat</SText>
      <SText>{route.params.id}</SText>
      <SText>{route.params.name}</SText>
      <Button
        title={'Home'}
        onPress={() => navigation.reset({ routes: [{ name: 'List' }, { name: 'Home' }] })}
        // routes에 쌓인 순서대로 스택이 쌓임
      />
    </Container>
  );
};

export default Chat;
