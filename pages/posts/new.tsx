import React, { useState } from 'react';
import { withRedux } from '../../lib/redux';
import Router from 'next/router';
import { addPost } from '../../lib/posts';
import Layout from '../../components/Layout/Layout';
import { Content, Title, Form, Input, Button } from './newStyle';

const New = () => {
  const [post, setPost] = useState({ title: '', body: '' });

  const changeHandler = (e: any) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      addPost(post).then(() => {
        setPost({ title: '', body: '' });
        Router.push('/');
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout title="Add new blog">
      <Content>
        <Title>Add new post</Title>
        <Form>
          <Input placeholder="Title" type="text" name="title" value={post.title} onChange={changeHandler} />

          <Input placeholder="Body" type="text" name="body" value={post.body} onChange={changeHandler} />

          <Button onClick={submitHandler}>Enter</Button>
        </Form>
      </Content>
    </Layout>
  );
};

export default withRedux(New);
