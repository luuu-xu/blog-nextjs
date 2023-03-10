export async function getCommentListData(id: string) {
  // Call API to get a list of comments.
  const res = await fetch(`http://localhost:3000/api/posts/${id}/comments`);
  const res_data = await res.json();
  const comment_list_data = res_data.comment_list;

  return comment_list_data;
}