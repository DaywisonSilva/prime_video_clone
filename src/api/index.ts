//  ENV
import {API_BASE_URL} from '@env';

const get = async (endpoint: string) => {
  try {
    const data = await fetch(API_BASE_URL + endpoint);
    const json = await data.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

const post = async (url: string, body?: string) => {
  const post = await fetch(url, {body});
  return post;
};

const API = {
  get,
  post
};

export default API;
