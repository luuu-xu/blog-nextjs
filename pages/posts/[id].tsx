import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
}

type postDataProps = {
  title: string,
  text: string,
  timestamp_formatted_date: string,
}

export default function Post({ postData } : { postData: postDataProps }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.timestamp_formatted_date}</div>
        <div>{postData.text}</div>
      </article>
    </Layout>
  );
}