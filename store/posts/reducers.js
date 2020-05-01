import types from './types';
import { Post } from '../../models/Post';

const init = {
  posts: [],
  post: {},
};

function postsReducer(state = init, { type, payload }) {
  switch (type) {
    case types.GET_ALL_POSTS:
      return { ...state, posts: [...payload.reverse()] };
    case types.GET_POST:
      return { ...state, post: payload };
    case types.ADD_POST:
      return { ...state, posts: [payload, ...posts] };
    default:
      return state;
  }
}

export default postsReducer;
