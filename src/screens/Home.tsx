import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../navigations/Stack';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = styled.View<{ insets: EdgeInsets }>`
  align-items: center;
  padding: ${(p) =>
    `${p.insets.top}px ${p.insets.right}px ${p.insets.bottom}px ${p.insets.left}px`};
`;
const SText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;
export type HomeScreenProps = StackScreenProps<StackParamList, 'Home'>;

const Home = ({ navigation }) => {
  // const navigation = useNavigation<NavigationProp<StackParamList>>();
  // 모바일 기기 노치와 같은 것들로 부터 안전한 영역너비 제공
  const insets = useSafeAreaInsets();
  console.log(insets);

  return (
    <Container insets={insets}>
      <SText>Home</SText>
      <Button title={'List'} onPress={() => navigation.navigate('List')} />
    </Container>
  );
};

export default Home;
