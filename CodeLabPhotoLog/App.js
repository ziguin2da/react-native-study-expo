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
