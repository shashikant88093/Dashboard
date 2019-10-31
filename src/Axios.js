import axios from 'axios';
import Cookies from 'js-cookie';

var csrfCookie = Cookies.get('csrftoken');

const instance = axios.create({
    baseURL: 'http://10.0.0.83:8043',
    withCredentials: true
});

instance.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
instance.defaults.headers.common['X-CSRFTOKEN'] = csrfCookie;

export default instance;