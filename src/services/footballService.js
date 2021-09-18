import axios from 'axios';

const footballService = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': `${process.env.REACT_APP_API_TOKEN}`,
  },
});

export default footballService;
