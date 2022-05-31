//  ENV
import {API_BASE_URL} from '@env';

type Endpoints = '/banners' | '/content' | '/channels';

const get = async (endpoint: Endpoints) => {
  try {
    const data = await fetch(API_BASE_URL + endpoint);
    const json = await data.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

const post = async (url: Endpoints, body?: string) => {
  const post = await fetch(url, {body});
  return post;
};

const API = {
  get,
  post
};

export default API;
