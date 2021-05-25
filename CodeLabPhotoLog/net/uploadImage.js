import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    }
}

const config = {
    headers: {
        Authorization: 'client-ID 706252dfb58a59c'
    }
}

async function uploadImage() {
    // promisify
    return new Promise( (resolve, reject) => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            
            if (response.didCancel) {
                console.log('User cancelled image picker');
                // reject( { message: 'User cancelled image picker' } );
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                reject( { mesasge: response.error } );
            } else {
                const params = new FormData();
                params.append( 'image', response.data );
                axios.post('https://api.imgur.com/3/image', params, config)
                .then( response => {
                    resolve( response.data.data.link );
                })
                .catch( error => {
                    reject( { mesage: error.response.data.data.error } );
                })
                .finally( () => {
                
                });
            }
        });
    });
}

export default uploadImage;
