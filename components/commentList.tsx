import { GetStaticProps } from 'next';
import utilStyles from '../styles/utils.module.css';

type commentListData = {
  name: string,
  text: string,
  _id: string,
  timestamp_formatted_datetime: string,
}[];

export default function CommentList({ commentListData } : { commentListData }) {
  // console.log(commentListData);
  return (
    <section>
      <h2 className={utilStyles.headingLg}>Comments</h2>
      <ul className={utilStyles.list}>
        {commentListData.length 
        ?
        commentListData.map(({ _id, name, text, timestamp_formatted_datetime }) => (
          <li className={utilStyles.listItem} key={_id}>
            <strong>{name}</strong>
            <span> </span>
            <small className={utilStyles.lightText}>
              {timestamp_formatted_datetime}
            </small>
            <p>{text}</p>
          </li>
        ))
        :
        <p>Be the first to comment!</p>
        }
      </ul>
    </section>
  );
}