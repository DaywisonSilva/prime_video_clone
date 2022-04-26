const get = async (url: string) => {
  try {
    const data = await fetch(url);
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
