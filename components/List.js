import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import ListItem from './ListItem';

const Collection = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 0;
  margin-bottom: 2rem;
`;

const Card = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-radius: 5px;
  padding: 1rem 1rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

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
