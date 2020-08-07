import Post from "../model/post";

function createPost(post) {
  return post.save();
}

function findAllPost() {
  return Post.find().populate("postedBy", "_id name").exec();
}

function findPostByMe(id) {
  return Post.find({ postedBy: id }).populate("postedBy", "_id name").exec();
}

export default { createPost, findAllPost, findPostByMe };
