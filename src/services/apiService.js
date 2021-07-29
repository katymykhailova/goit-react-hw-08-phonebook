import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchContactById(id) {
  const { data } = await axios.get(`/contacts/${Number(id)}`);
  return data;
}
