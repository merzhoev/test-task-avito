const initialState = {
  news: {},
  comments: [],
  isLoaded: false
}

const news = (state = initialState, action) => {
  switch (action.type) {
    case 'news/SET_NEWS_ITEM':
      return {
        ...state,
        news: action.payload,
        isLoaded: true
      }
    case 'news/SET_IS_LOADED':
      return {
        ...state,
        isLoaded: action.payload
      }
    case 'news/SET_COMMENTS':
      return {
        ...state,
        comments: action.payload
      } 
    default:
      return state;
  }
}

export default news;