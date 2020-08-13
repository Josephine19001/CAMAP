import axios from "axios";

import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../actions-types/auth";

//Sign up action creators
const signUpRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};
const signUpSuccess = (user) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      user,
    },
  };
};
const signUpFailure = (error) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

export const signUp = (user, history) => {
  return function (dispatch) {
    dispatch(signUpRequest());
    axios({
      method: "post",
      url: "/signUp",
      data: user,
    })
      .then((response) => {
        const { data } = response.data;
        dispatch(signUpSuccess(data));
        history.push("/signIn");
      })
      .catch((error) => {
        console.log(error);
        // dispatch(signUpFailure(error));
      });
  };
};

//Sign in action creators
const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  };
};
const signInSuccess = (token) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      token,
    },
  };
};
const signInFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

export const signIn = (payload, history) => {
  return function (dispatch) {
    dispatch(signInRequest);
    axios({
      method: "post",
      url: "/signIn",
      data: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
      },
    })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("USER-TOKEN", token);
        dispatch(signInSuccess(token));
        history.push("/");
        console.log("Success");
      })
      .catch((error) => {
        dispatch(signInFailure(error.response.data.message));
      });
  };
};

//sign out action creators
export const signOutRequest = function () {
  return {
    type: SIGN_OUT_REQUEST,
  };
};

export const signOutSuccess = function () {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = function () {
  return {
    type: SIGN_OUT_FAILURE,
  };
};

export const signOut = function (history) {
  return function (dispatch) {
    dispatch(signOutRequest());
    localStorage.clear();
    history.push("/products/list");
    if (localStorage.getItem("USER_TOKEN")) {
      dispatch(signOutFailure());
    } else {
      dispatch(signOutSuccess());
    }
  };
};

//forgot-password action creators
export const forgotPasswordRequest = function () {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
};

export const forgotPasswordSuccess = function () {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};

export const forgotPasswordFailure = function (error) {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};

export const forgotPassword = function (email) {
  return function (dispatch) {
    dispatch(forgotPasswordRequest());
    axios({
      method: "post",
      url: "/forgot-password",
      data: { email },
    })
      .then((response) => {
        const { message } = response.data;

        dispatch(forgotPasswordSuccess());
      })
      .catch((error) => {
        dispatch(forgotPasswordFailure(error.response.data.message));
      });
  };
};

//reset password action creators
export const resetPasswordRequest = function () {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
};

export const resetPasswordSuccess = function (token, password) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: { token, password },
  };
};

export const resetPasswordFailure = function (error) {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: error,
  };
};

export const resetPassword = function (password, resetToken, history) {
  return function (dispatch) {
    dispatch(resetPasswordRequest());
    axios({
      method: "put",
      url: `/reset-password/${resetToken}`,
      data: password,
      headers: {
        Authorization: `Bearer ${resetToken}`,
      },
    })
      .then((response) => {
        const { token, password } = response.data;
        dispatch(resetPasswordSuccess(token, password));
        localStorage.setItem("USER_TOKEN", token);
        history.push("/login");
      })
      .catch((error) => {
        dispatch(resetPasswordFailure(error.response.data.message));
      });
  };
};

// Update Profile
export const updateProfileRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};
export const updateProfileSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: {
      user,
    },
  };
};
export const updateProfileFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: {
      error,
    },
  };
};
export const updateProfile = (user) => {
  return function (dispatch) {
    dispatch(updateProfileRequest());

    axios({
      method: "put",
      url: "/update-profile",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
      },
      data: user,
    })
      .then((response) => {
        const user = response.data;
        console.log(response.data);
        dispatch(updateProfileSuccess(user));
      })
      .catch((error) => {
        dispatch(updateProfileFailure(error.response.data.message));
      });
  };
};

// Change password
export const changePasswordRequest = () => {
  return {
    type: CHANGE_PASSWORD_REQUEST,
  };
};
export const changePasswordSuccess = (user) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: {
      user,
    },
  };
};
export const changePasswordFailure = (error) => {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: {
      error,
    },
  };
};
export const changePassword = (user) => {
  return function (dispatch) {
    dispatch(changePasswordRequest());

    axios({
      method: "put",
      url: "/change-password",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
      },
      data: user,
    })
      .then((response) => {
        const user = response.data;
        console.log(response.data);
        dispatch(changePasswordSuccess(user));
      })
      .catch((error) => {
        dispatch(changePasswordFailure(error));
        console.log("Error created:", error);
      });
  };
};
