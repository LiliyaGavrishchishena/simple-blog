import { getPostById } from '../../../lib/posts';

export default async ({ query: { id } }, res) => {
  try {
    const post = await getPostById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: `Post with id: ${id} not found.` });
    }
  } catch (error) {
    console.log(error);
  }
};
