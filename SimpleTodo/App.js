import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';
import _ from 'lodash';

const Container = styled.SafeAreaView`
  flex: 1; 
  padding-top: ${ Constants.statusBarHeight }px; /* template literal */
`;
const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;
const Contents = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;
const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TodoItemText = styled.Text`
  font-size: 20px;  
  flex: 1;
`;
const TodoItemButton = styled.Button`

`;
const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;
const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;
const Button = styled.Button`

`;
const TempText = styled.Text`
  font-size: 20px;
  margin-bottom: 12px;
`;

export default function App() {
  const [ list, setList ] = React.useState([
    { id: '1', todo: '할 일 1' },
    { id: '2', todo: '할 일 2' },
  ]);

  const [ inputTodo, setInputTodo ] = React.useState('');

  // return 할 수 있는 객체
  // 1. 컴포넌트 2.컴포넌트로 이루어진 배열
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      >
        <Contents>
          { list.map( item => {
            return (
              <TodoItem key={ item.id }>
                <TodoItemText>
                  {item.todo}
                </TodoItemText>
                <TodoItemButton title='삭제' onPress={ () => {
                  setList(_.reject( list, ele => ele.id === item.id ));
                } } />
              </TodoItem>
            )
          }) }
        </Contents>
        <InputContainer>
          <Input value={ inputTodo } onChangeText={ value => setInputTodo( value ) }/>
          <Button title='전송' onPress={ () => {
            // 원본 배열을 수정하는 push는 사용 불가
            // inputTodo.push( { ... } )
            if( inputTodo == '' ){
              return ;
            }
            const newItem = {
              id: new Date().getTime().toString(),
              todo: inputTodo,
            };
            setList( [
              ...list, // ... 전개 연산자 Spread Operator
              newItem,
            ]);
            setInputTodo('');
          } } />
        </InputContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
