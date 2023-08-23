import getBlogPosts from "@/utilis/getBlogPosts";

const PostPage = async () => {
  const blogPosts = await getBlogPosts();
  return <div>PostPage: {blogPosts.length}</div>;
};

export default PostPage;
