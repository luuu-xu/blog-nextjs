import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export const getStaticProps: GetStaticProps = async () => {
  // Call API to get posts.
  const res = await fetch('http://localhost:3000/api/posts');
  const res_data = await res.json();
  const post_list = res_data.post_list;

  return {
    props: {
      post_list,
    },
  }
}

type post_list_props = {
  _id: string,
  title: string,
  timestamp_formatted_date: string,
  is_published: boolean,
}[];

export default function Home({ post_list } : { post_list: post_list_props }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm self-learning full-stack JavaScript web development with The Odin Project now. It has been a really fun and enjoying process.</p>
        <p>You can find me on <a href="https://github.com/luuu-xu">Github</a>.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Published Blog</h2>
        <ul className={utilStyles.list}>
          {post_list.map(({ _id, title, timestamp_formatted_date, is_published }) => (
            is_published 
            ? 
            <li className={utilStyles.listItem} key={_id}>
              <Link href={`/posts/${_id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {timestamp_formatted_date}
              </small>
            </li>
            :
            ''
          ))}
        </ul>
      </section>
    </Layout>
  );
}