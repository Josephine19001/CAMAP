import Post from "../model/post";
import PostServices from "../services/post";
import { Error } from "../util/error";

export const createPost = async (req, res, next) => {
  try {
    const { title, body, photo } = req.body;
    req.user.password = undefined;
    req.user.email = undefined;
    req.user.__v = undefined;
    const newPost = new Post({
      title,
      body,
      photo,
      postedBy: req.user,
    });
    await PostServices.createPost(newPost);
    res.status(200).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

export const getAllPost = async (req, res, next) => {
  try {
    // const posts = await Post.find().exec();
    const posts = await PostServices.findAllPost();
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    console.log(error);

    next();
  }
};

export const getPostByMe = async (req, res, next) => {
  try {
    const id = req.user._id;
    const mypost = await PostServices.findPostByMe(id);
    res.status(200).json({
      success: true,
      data: mypost,
    });
  } catch (error) {
    console.log(error);

    next();
  }
};
