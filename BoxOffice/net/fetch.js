import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

async function fetch( url ) {
    try {
        let result = await AsyncStorage.getItem( url );
        if ( result !== null ) {
            return JSON.parse( result );
        }
    
        const response = await axios.get( url );
        AsyncStorage.setItem( url, JSON.stringify( response.data ) );
        return response.data;
    }
    catch( error ) {
        alert(erorr.message);
    }
}

export default fetch;