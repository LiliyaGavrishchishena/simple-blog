import { useDispatch } from 'react-redux';
import { withRedux } from '../lib/redux';
import useSWR from 'swr';
import { types } from '../store/posts';
import Layout from '../components/Layout';
import List from '../components/List';

const fetcher = (url) => fetch(url).then((res) => res.json());

const IndexPage = () => {
    const { data, error } = useSWR('/api/posts', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    if (data) {
        const dispatch = useDispatch();
        dispatch({
            type: types.GET_ALL_POSTS,
            payload: data,
        });
    }

    return (
        <Layout title="The GL Blog">
            <List />
        </Layout>
    );
};

export default withRedux(IndexPage);
