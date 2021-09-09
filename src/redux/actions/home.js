import { getStoryIds, getStory } from '../../dal/api';
import { mapTime } from '../../mappers/mapTime';

export const fetchNews = () => async (dispatch) => {
  try {
    dispatch(setIsLoaded(false))
    const storyIds = await getStoryIds()

    // const items = []
    // for (const [index, id] of storyIds.entries()) {
    //   const story = await getStory(id)
      
    //   if (story) {
    //     story.time = mapTime(story.time)
    //     items.push(story);
    //   } 
    // }

    // dispatch(setNews(items))

    const items = []
    for (const [index, id] of storyIds.entries()) {
      const story = await getStory(id)
      
      if (story) {
        story.time = mapTime(story.time)
        items.push(story);
        if (index && index % 20 === 0) dispatch(setNews(items))
      } 
    }

    dispatch(setNews(items))
  } catch (err) {
    console.error(err)
  }
}

const setNews = (items) => ({
  type: 'home/SET_NEWS',
  payload: items
})

const setIsLoaded = (payload) => ({
  type: 'home/SET_IS_LOADED',
  payload
})