import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRedux } from '../../lib/redux';
import Router from 'next/router';
import styled from 'styled-components';
import { addPost } from '../../lib/posts';
import Layout from '../../components/Layout';
import { types } from '../../store/posts';

const Content = styled.div`
  margin: 0 auto;
  color: #fff;
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.4em;
  line-height: 1.15em;
  color: #15171a;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  padding: 3rem 0;
`;

const Input = styled.input`
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  line-height: 1em;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  outline: none;
`;

const Button = styled.button`
  display: block;
  background: #313b3f;
  opacity: 0.8;
  padding: 0.7rem 1rem;
  border: 1px solid #fff;
  color: #fff;
  line-height: 1em;
  border-radius: 10px;
  font-size: 1rem;
  width: 100%;
  outline: none;

  &:hover {
    opacity: 1;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const New = () => {
  const [post, setPost] = useState({ title: '', body: '' });

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      addPost(post).then((res) => {
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
          <Input
            placeholder="Enter title"
            type="text"
            name="title"
            value={post.title}
            onChange={changeHandler}
          />

          <Input
            placeholder="Enter body"
            type="text"
            name="body"
            value={post.body}
            onChange={changeHandler}
          />

          <Button onClick={submitHandler}>Enter</Button>
        </Form>
      </Content>
    </Layout>
  );
};

export default withRedux(New);
