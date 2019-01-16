import axios from 'axios';

export default axios.create({
  baseURL: 'https://twitter-clone-backend.herokuapp.com/api/v1',
});
