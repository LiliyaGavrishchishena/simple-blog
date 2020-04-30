import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Header = styled.header`
    background: #313b3f;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    align-items: flex-start;
    height: 64px;
    padding: 2rem 1rem;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`;

const Content = styled.div`
    margin: 0 auto;
    color: #fff;
    text-align: center;
    padding: 3rem 0;
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    margin: 0 auto;
    color: #fff;
    text-align: center;
`;

const Slogan = styled.h2`
    font-size: 1.2rem;
    font-weight: 300;
    padding: 3rem 0;
    line-height: 1.4em;
`;

const Footer = styled.footer`
    background: #313b3f;
    color: #fff;
`;

const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header>
            <Container>
                <Nav>
                    <Link href="/">
                        <a>The GL Blog</a>
                    </Link>

                    <Link href="/posts/new">
                        <a>New post</a>
                    </Link>
                </Nav>
                <Content>
                    <Title>The GL Blog</Title>
                    <Slogan>Real stories & opinions about running an independent membership business</Slogan>
                </Content>
            </Container>
        </Header>
        <Container> {children}</Container>
        <Footer>
            <Container>
                <Content>
                    <a href="/">The GL Blog</a> © 2020
                </Content>
            </Container>
        </Footer>
    </div>
);

export default Layout;
