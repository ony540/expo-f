import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import List from '../screens/List';
import Chat from '../screens/Chat';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
export type StackParamList = {
  Home: undefined;
  List: undefined;
  Chat: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const StackNav = () => {
  return (
    // initialRouteName - 첫번째 페이지
    <Stack.Navigator
      initialRouteName="Home"
      id={undefined}
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },

        headerStyle: {
          height: 120,
          backgroundColor: '#555',
          borderBottomWidth: 5,
          borderBottomColor: '#111',
        },
        headerTitleStyle: {
          fontSize: 24,
          color: '#fff',
        },
        headerTitleAlign: 'center',
        headerTitle: ({ style }) => {
          return <FontAwesome5 name="react" style={style} />;
        },
        // 이전버튼
        headerBackTitle: '',
        // 헤더 전체에 영향을 줌 Tit이 흰색인 이유는 titleStyle때문에
        headerTintColor: '#ff6600',
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerTitle: 'Chat Screen',
          // 기기마다 기본 뒤로가기버튼 icon이 다르므로 수정해주기
          headerBackImage: ({ tintColor }) => (
            <AntDesign
              name="arrowleft"
              size={24}
              color={tintColor}
              style={{ marginLeft: 5, marginRight: 5 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
