import axios from 'axios'

const instance  = axios.create({
    baseURL : 'https://itsburgerapp.firebaseio.com/'
});

export default instance;