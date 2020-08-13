import axios from "axios";

import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
} from "../actions-types/post";

//Get all post action creators
export const getAllPostRequest = () => {
  return {
    type: GET_ALL_POST_REQUEST,
  };
};
export const getAllPostSuccess = (post) => {
  return {
    type: GET_ALL_POST_SUCCESS,
    payload: {
      post,
    },
  };
};
export const getAllPostFailure = (error) => {
  return {
    type: GET_ALL_POST_FAILURE,
    payload: {
      error,
    },
  };
};

export const getAllPosts = () => {
  return function (dispatch) {
    dispatch(getAllPostRequest());

    axios({
      method: "get",
      url: "/",
    })
      .then((response) => {
        const posts = response.data;
        dispatch(getAllPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(getAllPostFailure(error));
      });
  };
};

//Create post action creators
export const createPostRequest = () => {
  return {
    type: CREATE_POST_REQUEST,
  };
};
export const createPostSuccess = (post) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: {
      post,
    },
  };
};
export const createPostFailure = (error) => {
  return {
    type: CREATE_POST_FAILURE,
    payload: {
      error,
    },
  };
};
export const createPost = (post, history) => {
  return function (dispatch) {
    dispatch(createPostRequest());

    axios({
      method: "post",
      url: "/posts/create-post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
      },
      data: post,
    })
      .then((response) => {
        const res = response.data;
        dispatch(createPostSuccess(res));
        history.push("/");
      })
      .catch((error) => {
        dispatch(createPostFailure(error.response.data.message));
      });
  };
};
