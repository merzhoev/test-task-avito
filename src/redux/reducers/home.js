const initialState = {
  items: [],
  isLoaded: false
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'home/SET_NEWS':
      return {
        ...state,
        items: state.items.length
          ? action.payload
          : [...state.items, ...action.payload],
        // items: action.payload,
        isLoaded: true
      }
    case 'home/SET_IS_LOADED':
      return {
        ...state,
        isLoaded: action.payload
      }
    default:
      return state;
  }
}

export default home;