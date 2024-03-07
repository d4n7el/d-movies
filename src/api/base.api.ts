import axios from 'axios';

export const getRequest = async (path: string) => {
  return await axios.get(`${path}`);
};
