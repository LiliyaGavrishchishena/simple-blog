import styled from 'styled-components';

export const Content = styled.div`
  margin: 0 auto;
  color: #fff;
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.4em;
  line-height: 1.15em;
  color: #15171a;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  padding: 3rem 0;
`;

export const Input = styled.input`
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

export const Button = styled.button`
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
