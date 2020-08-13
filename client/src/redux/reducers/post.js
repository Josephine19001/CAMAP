import {
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from "../actions-types/post";

const initialState = {
  allPosts: [],
  error: "",
  loading: false,
  currentPost: {},
};

const postReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POST_REQUEST:
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_POST_FAILURE:
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_POST_SUCCESS:
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        allPosts: action.payload.post,
      };

    default:
      return { ...state };
  }
};

export default postReducer;
