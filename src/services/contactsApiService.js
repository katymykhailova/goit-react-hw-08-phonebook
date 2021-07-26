import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContactById(id) {
  const { data } = await axios.get(`/contacts/${Number(id)}`);
  return data;
}
