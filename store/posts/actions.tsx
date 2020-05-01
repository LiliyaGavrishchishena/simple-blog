import types from './types';
import { Post } from '../../models/Post';

const getAllPosts = (posts: Post[]) => ({
  type: types.GET_ALL_POSTS,
  payload: posts,
});

const getPost = (post: Post) => ({
  type: types.GET_POST,
  payload: post,
});

const addPost = (post: Post) => ({
  type: types.ADD_POST,
  payload: post,
});

export default {
  getAllPosts,
  getPost,
  addPost,
};
