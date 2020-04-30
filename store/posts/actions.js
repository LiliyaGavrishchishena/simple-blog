import types from './types'

const getAllPosts = posts => ({
  type: types.GET_ALL_POSTS,
  payload: posts,
})

const getPost = post => ({
  type: types.GET_POST,
  payload: post,
})

const addPost = post => ({
  type: types.ADD_POST,
  payload: post,
})

export default {
  getAllPosts,
  getPost,
  addPost,
};