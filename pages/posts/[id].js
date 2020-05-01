import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { withRedux } from '../../lib/redux';
import { types } from '../../store/posts';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  margin-bottom: 2rem;
`;

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

function Post() {
  const { query } = useRouter();
  const { data, error } = useSWR(() => query.id && `/api/posts/${query.id}`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  if (data) {
    const dispatch = useDispatch();
    dispatch({
      type: types.GET_POST,
      payload: data,
    });
  }

  return (
    <Layout title="Id">
      <Content>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Layout>
  );
}

export default withRedux(Post);
