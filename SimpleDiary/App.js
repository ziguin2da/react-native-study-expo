// In App.js in a new project

/*
배포설정 및 방법 메모
1. app.json 파일에 설정 추가
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.yourcompany.yourappname",
      "versionCode": 1
    }

2. root directory 에서 build 명령어 실행
expo build:android

Build 는 로컬에서하지 않고 엑스포서버(원격)에서 빌드된다.
엑스포서버에서 빌드가 완료되면 소스(apk)를 내려 받는다.

*/

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './pages/List';
import Detail from './pages/Detail';
import Form from './pages/Form';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} options={ {title: '일기 목록'} }/>
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Form" component={Form} options={ {title: '일기 작성'} }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;