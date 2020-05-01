import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Header, Container, Nav, Content, Title, Slogan, Footer } from './LayoutStyle';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title }) => (
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
