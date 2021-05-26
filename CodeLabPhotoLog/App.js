/*
배포설정 및 방법 메모

1. 안드로드 스튜디오에서 빌드

2. React 에서 빌드
 - https://reactnative.dev/docs/signed-apk-android
2-1. keystore 생성
 - keytool -genkeypair -v -storetype PKCS12 -keystore photo-log.keystore -alias photo-log -keyalg RSA -keysize 2048 -validity 10000
 - 비밀번호: wlrndls79# (지구인79#)

2-2. keystore 파일 이동
 - android/app/.keystore
 - keystore 파일은 android/app 디렉토리 바로 밑에둔다(root/android/app)

2-3. gradle.properties 수정
 - android/gradle.properties

2-4. build.gradle 수정
 - android/app/build.gradle

2-5. 번들파일(aab) 생성
 - android/gradlew.bat
 - cmd gradlew bundleRelease 실행
 - 파일은 android/app/build/outputs/bundle/release 위치에 생성

 2-5-1. APK파일 생성
 - android/gradlew.bat
 - cmd gradlew assembleRelease 실행
 - 파일은 android/app/build/outputs/apk/release 위치에 생성
*/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigators/AppNavigator';
import { Provider } from 'context-q';
import storage from './net/storage';

const App: () => Node = () => {

  const [checked, setChecked] = React.useState(null);
  React.useEffect( () => {
      storage.read('showDate').then( data => {
        setChecked(data.showDate);
      });
  }, []);

  return (
    <>
      {
        checked !== null && (
          <Provider defaultState={{ showDate: checked }}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </Provider>
        )
      }
    </>
  );
};

export default App;
