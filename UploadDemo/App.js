/**
 * /android/build.gradle 파일 수정
 * buildscript.ext.minSdkVersion = 21 ( 16에서 21로 변경 )
 */
import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView> 
        <Button title='이미지 선택' onPress={ () => {} } />
      </SafeAreaView>
    </>
  );
};

export default App;
