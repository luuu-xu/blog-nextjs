import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import CommentList from "../../components/commentList";
import { getCommentListData } from "../../lib/comments";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  const commentListData = await getCommentListData(params.id as string);
  return {
    props: {
      postData,
      commentListData,
    },
  };
}

type postData = {
  title: string,
  text: string,
  timestamp_formatted_date: string,
}

type commentListData = {
  name: string,
  text: string,
  _id: string,
  timestamp_formatted_datetime: string,
}[]

type PostProps = {
  postData: postData,
  commentListData: commentListData,
}

export default function Post({ postData, commentListData } : PostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>Published on {postData.timestamp_formatted_date}</div>
        <div className={utilStyles.articleText}>{postData.text}</div>
      </article>
      <br />
      <CommentList commentListData={commentListData} />
    </Layout>
  );
}