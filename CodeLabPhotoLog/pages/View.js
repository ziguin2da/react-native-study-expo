import React from 'react';
import styled from 'styled-components/native';
import storage from '../net/storage';

const Title = styled.Text`
    font-size: 36px;
`;

const Image = styled.Image`
    width: 100%;
    height: 360px;
`;

const Tags = styled.Text`
    font-size: 18px;
`;

function View(props) {
    const [item, setItem] = React.useState(null);
    React.useEffect( () => {
        storage.readById( props.route.params.id )
        .then( data => setItem( data ) );
    })
    return (
        <>
            { item && (
                <>
                    <Image source={{uri: item.url}} />
                    <Tags>{item.hashtags}</Tags>
                </>
            )}
        </>
    )
}

export default View;