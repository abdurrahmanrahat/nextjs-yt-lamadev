import "server-only";

import { getBlogPostsFromDb } from "@/database/blogs.db";
import { cache } from "react";

const getBlogPosts = cache(() => {
  return getBlogPostsFromDb();
});

export default getBlogPosts;
