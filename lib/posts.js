import axios from 'axios';

export async function getAllPosts() {
  try {
    return await axios
      .get('https://simple-blog-api.crew.red/posts')
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
}

export async function getPostById(id) {
  try {
    return await axios
      .get(`https://simple-blog-api.crew.red/posts/${id}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
}

export async function addPost(post) {
  try {
    return await axios
      .post(
        'https://simple-blog-api.crew.red/posts',
        {
          title: post.title,
          body: post.body,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
}
