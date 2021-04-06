/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const clientId = '706252dfb58a59c';
const clientSecret = '602728f092c5886906e2aeb9abcee5c2f0177b9c';

const options = {
  title: '이미지를 선택주세요.',
  customButtons: [{ name: 'gb', title: '페이북 사진첩에서 선택하기'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const config = {
  headers: {
    Authorization: `Client-ID ${clientId}`,
  }
};

const App: () => React$Node = () => {
  const [url, setUrl] = React.useState( null );
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        <Button title='이미지 선택' onPress={ () => {
          setIsLoading(true);
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
              setIsLoading(false);
              console.warn('User cancelled image picker');
            } else if (response.error) {
              setIsLoading(false);
              console.warn('ImagePicker Error: ', response.error);
              alert('ImagePicker Error: ' + response.error);
            } else if (response.customButton) {
              setIsLoading(false);
              console.warn('User tapped custom button: ', response.customButton);
            } else {
              //const source = { uri: response.uri };

              // You can also display them image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
              // const source = { uri: `data:${response.type};base64,${response.data}` };
              // setUrl( `data:${response.type};base64,${response.data}` );
              const params = new FormData();
              params.append('image', response.data);
              console.log(params);
              axios.post('https://api.imgur.com/3/image', params, config)
                .then( response => {
                  console.log(response);
                  setUrl( response.data.data.link );
                })
                .catch( error => {
                  console.warn(error);
                  alert( 'Error : ' + error.response.data.data.error );
                })
                .finally( () => {
                  setIsLoading(false);
                });
            }
            
          });
        } } />
        {isLoading ? (
          <ActivityIndicator size='large' color='red'/>
        ) : (
          <>
            {url && (
              <Image source={{ uri: url }} style={{ width: 340, height: 340 }}/>
            )}
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
