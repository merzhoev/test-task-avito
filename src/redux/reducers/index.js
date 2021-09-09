import { combineReducers } from 'redux';

import home from './home';
import newsPage from './news';

const rootReducer = combineReducers({
  home,
  newsPage
})

export default rootReducer;