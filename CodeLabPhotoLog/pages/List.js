import React from 'react';
import styled from 'styled-components/native';
import storage from '../net/storage';

const Title = styled.Text`
    font-size: 36px;
`;
const Button = styled.Button`
`;
const ListItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #e5e5e5;
`;
const Thumbnail = styled.Image`
    width: 80px;
    height: 80px;
    margin-right: 12px;
`;
const Tags = styled.Text`
`;

function List(props) {
    const [list, setList] = React.useState([]);
    React.useEffect( () => {
        const unsubscribe = props.navigation.addListener('focus', e => {
            storage.readAll().then(data => setList(data));
        });
        storage.readAll().then(data => setList(data));
        return () => unsubscribe();
    }, []);
    return (
        <>
            {list.map(item => (
                <ListItem key={ item.id } onPress={ () => {
                    props.navigation.navigate( 'View', {id: item.id } );
                }}>
                    <Thumbnail source={{ uri: item.url }} />
                    <Tags>
                        {item.hashtags}
                    </Tags>
                </ListItem>
            ))}
            <Button title='사진 추가' onPress={ () => {
                props.navigation.navigate( 'Form' );
            } }/>
        </>
    )
}

export default List;