import { useState } from 'react';
import styles from '../styles/commentForm.module.css';
import { useRouter } from 'next/router';

export default function CommentForm({ postid }: { postid: string }) {
  const [errorMessages, setErrorMessages] = useState<{ msg: string }[]>([]);
  const router = useRouter();

  // Handles the submit event on form submit.
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      text: { value: string };
    };

    // Get the data from the form.
    const data = {
      name: target.name.value,
      text: target.text.value,
    }
    const JSONdata = JSON.stringify(data);
    
    // API endpoint the form is sending to.
    const endpoint = `http://localhost:3000/api/posts/${postid}/comments`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    // Send the data to the comment-form API and get a response.
    const response = await fetch(endpoint, options);
    const result = await response.json();

    // Deal with status codes.
    switch (response.status) {
      case 400:
        setErrorMessages(result.errors);
        return;
      case 404:
        return router.push('/');
      case 502:
        setErrorMessages([{ msg: 'Comment saving failed.'}]);
      default:
        router.reload();
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor='name' className={styles.label}>Name</label>
      <input type='text' id='name' name='name' required className={styles.input}/>
      <label htmlFor='text' className={styles.label}>Comment</label>
      <input type='text' id='text' name='text' required className={styles.input} />
      <input type='hidden' name='postid' value={postid} />
      <button type='submit' className={styles.button}>Submit</button>
      {errorMessages.map((errorMessage, i) => {
        return (
          <p className={styles.errorMessage} key={i}>
            {errorMessage.msg}
          </p>
        );
      })}
    </form>
  );
}