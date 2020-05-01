import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Collection, Card } from './ListStyle';
import ListItem from '../ListItem/ListItem';

const usePosts = () => {
  return useSelector(
    (state) => ({
      posts: state.posts,
    }),
    shallowEqual
  );
};

const List = () => {
  const { posts } = usePosts();
  return (
    <Collection>
      {posts.map((item) => (
        <Card key={item.id}>
          <ListItem data={item} />
        </Card>
      ))}
    </Collection>
  );
};

export default List;
