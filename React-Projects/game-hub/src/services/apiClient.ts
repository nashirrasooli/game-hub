import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'af2a4598e081420cb9edf9b978d91c5c',
  },
});
