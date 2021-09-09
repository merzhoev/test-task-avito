import { getStory, getComment } from '../../dal/api';
import { mapTime } from '../../mappers/mapTime';

export const fetchNewsItem = (id) => async (dispatch) => {
  try {
    dispatch(setIsLoaded(false))
    
    const story = await getStory(id)
    story.time = mapTime(story.time)

    await dispatch(fetchComments(story.kids))

    dispatch(setNewsItem(story))
  } catch (err) {
    console.log(err)
  }
}

export const fetchComments = (commentIds) => async (dispatch) => {
  const comments = []

  if (commentIds) {
    for (const commentId of commentIds) {
      const comment = await getComment(commentId)
      comment.time = mapTime(comment.time)
      comments.push(comment)
    }
  }

  dispatch(setComments(comments))
}

const setNewsItem = (item) => ({
  type: 'news/SET_NEWS_ITEM',
  payload: item
})

const setIsLoaded = (payload) => ({
  type: 'news/SET_IS_LOADED',
  payload
})

const setComments = (comment) => ({
  type: 'news/SET_COMMENTS',
  payload: comment
})