import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../navigations/Stack';
import AntDesign from '@expo/vector-icons/AntDesign';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const SText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const items = [
  { id: 1, name: 'React Native' },
  { id: 2, name: 'Expo' },
  { id: 3, name: 'React Navigation' },
];
export type HomeScreenProps = StackScreenProps<StackParamList, 'Home'>;
const List = ({ navigation }) => {
  // 화면이 그려지기 전에 실행됨
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ tintColor, onPress }) => (
        <AntDesign
          name="arrowleft"
          size={24}
          color={tintColor}
          style={{ marginLeft: 11 }}
          onPress={onPress}
        />
      ),
      headerRight: ({ tintColor }) => (
        <AntDesign
          name="arrowright"
          size={24}
          color={tintColor}
          style={{ marginRight: 11 }}
          // 스택 가장 하단에 있는 것으로 이동
          onPress={() => navigation.popToTop()}
        />
      ),
    });
  }, []);
  return (
    <Container>
      <SText>List</SText>
      {items.map((item) => (
        <Button
          title={item.name}
          key={item.id}
          onPress={() => navigation.navigate('Chat', { id: item.id, name: item.name })}
        />
      ))}
    </Container>
  );
};

export default List;
