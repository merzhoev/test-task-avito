import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newsStoriesUrl = `${baseUrl}newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`;
const itemUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
  const { data } = await axios.get(newsStoriesUrl)
  return data;
}

export const getStory = async (id) => {
  const { data } = await axios.get(itemUrl + id + '.json?print=pretty')
  return data
}

export const getComment = async (id) => {
  const { data } = await axios.get(itemUrl + id + '.json?print=pretty')
  return data;
}