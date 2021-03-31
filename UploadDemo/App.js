/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: '이미지를 선택주세요.',
  customButtons: [{ name: 'gb', title: '페이북 사진첩에서 선택하기'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        <Button title='이미지 선택' onPress={ () => {
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
              alert('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
            }
          });
        } } />
      </SafeAreaView>
    </>
  );
};

export default App;
