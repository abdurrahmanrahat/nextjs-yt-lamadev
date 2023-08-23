// we do here for all the works that will need for blogs collection data, get post put delete etc.
import "server-only";

import dbConnect from "./dbConnect";

export const getBlogPostsFromDb = async () => {
  const db = await dbConnect();
  const blogPostCollection = db.collection("blogs");
  const result = blogPostCollection.find().toArray();
  return result;
};
