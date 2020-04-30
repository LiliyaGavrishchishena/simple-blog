import { getAllPosts } from '../../../lib/posts';

export default async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};
