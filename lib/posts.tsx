export async function getAllPostIds() {
  // Call API to get posts.
  const res = await fetch('http://localhost:3000/api/posts');
  const res_data = await res.json();
  const post_id_list = res_data.post_list.map((post) => {
    return {
      params: {
        id: post._id,
      },
    };
  });

  return post_id_list;
}

export async function getPostData(id: string) {
  // Call API to get a specific post.
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const res_data = await res.json();
  const post_data = res_data.post;

  return {
    id,
    ...(post_data as { 
      title: string,
      text: string,
      timestamp_formatted_date: string,
    })
  };
}