import utilStyles from '../styles/utils.module.css';
import CommentForm from './commentForm';

type commentListData = {
  name: string,
  text: string,
  _id: string,
  timestamp_formatted_datetime: string,
}[];

export default function CommentList({ commentListData, postid } : { commentListData : commentListData, postid : string }) {
  return (
    <div>
      <section>
        <h2 className={utilStyles.headingLg}>Comments</h2>
        <ul className={utilStyles.list}>
          {commentListData.map(({ _id, name, text, timestamp_formatted_datetime }) => (
            <li className={utilStyles.commentListItem } key={_id}>
              <strong>{name}</strong>
              <span> </span>
              <small className={utilStyles.lightText}>
                {timestamp_formatted_datetime}
              </small>
              <p>{text}</p>
            </li>
          ))}
          {commentListData.length
          ?
          <p className={utilStyles.headingMd}>Leave your comment:</p>
          :
          <p className={utilStyles.headingMd}>Be the first to comment!</p>}
        </ul>
      </section>
      <section>
          <CommentForm postid={postid} />
      </section>
    </div>
  );
}