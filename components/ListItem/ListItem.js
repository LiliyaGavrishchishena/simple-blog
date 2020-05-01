import React from 'react';
import Link from 'next/link';
import { Title, Text } from './ListItemStyle';

const ListItem = ({ data }) => (
  <Link href="/posts/[data.id]" as={`/posts/${data.id}`}>
    <a>
      <Title>{data.title}</Title>
      <Text>{data.body}</Text>
    </a>
  </Link>
);

export default ListItem;
