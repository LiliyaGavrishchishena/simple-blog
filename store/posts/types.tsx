import { Post } from '../../models/Post';

const GET_ALL_POSTS = 'post/GET_ALL_POSTS';
const GET_POST = 'post/GET_POST';
const ADD_POST = 'post/ADD_POST';

export default {
  GET_ALL_POSTS,
  GET_POST,
  ADD_POST,
};

interface GetPostsAction {
  type: typeof GET_ALL_POSTS;
  payload: Post[];
}

interface GetPostAction {
  type: typeof GET_POST;
  payload: Post;
}

interface AddPostAction {
  type: typeof ADD_POST;
  payload: Post;
}

export type BlogActionTypes = GetPostsAction | GetPostAction | AddPostAction;
