import axios from 'axios';
import { Cookies } from 'quasar';

const api = axios.create({
  baseURL: 'https://demometaway.vps-kinghost.net:8485/api',
});
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + Cookies.get('token');

export default api;
