import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import Container from './components/Container';
import Row from './components/Row';
import moment from 'moment';
moment.locale('ko');

// window, docuemnt 참조하는 라이브러리 등은 사용할 수 없음.

const Label = styled.Text`
  font-size: 36px;
  font-weight: bold;
`;

export default function App() {
  const [now, setNow] = React.useState( moment() );
  // 1. 이 컴포넌트가 처음으로 화면에 표시딜 때
  // 2. 주시하는 대상에 변화가 일어났을 때
  React.useEffect( () => {
    // 동작
    setInterval( () => {
      setNow( moment() );
    }, 1000);

  }, [ /* 주시 대상 */] );
  return (
    <Container>
      <Row>
        <Text>{ now.format( 'YYYY.MM.DD (ddd)' ) }</Text>
      </Row>
      <Row>
        <Label>{ now.format( 'HH' ) }</Label>
        <Label>{ parseInt(now.format( 's' ), 10) % 2 == 1 ? ':' : ' ' }</Label>
        <Label>{ now.format( 'mm' ) }</Label>
        <Label>{ parseInt(now.format( 's' ), 10) % 2 == 1 ? ':' : ' ' }</Label>
        <Label>{ now.format( 'ss' ) }</Label>
      </Row>
    </Container>
  );
}