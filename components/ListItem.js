import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h3`
    font-size: 1.2rem;
    margin: 0 0 0.4em;
    line-height: 1.15em;
    color: #15171a;
`;

const Text = styled.p`
    font-size: 1rem;
    margin: 0 0 1.5em;
    color: #738a94;
`;

const ListItem = ({ data }) => (
    <Link href="/posts/[data.id]" as={`/posts/${data.id}`}>
        <a>
            <Title>{data.title}</Title>
            <Text>{data.body}</Text>
        </a>
    </Link>
);

export default ListItem;
