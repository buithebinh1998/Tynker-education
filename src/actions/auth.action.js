import { OAuthAPI as API } from "../service/AuthenticationAPI.service";
import * as jwtDecode from "jwt-decode";
import * as actionTypes from "./actionType";
import swal from "sweetalert";
import { C } from '../constants/index'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const register = (email, password, history, resetForm) => {
  return dispatch => {
    API.post("/signup", {
      email,
      password
    })
      .then(res => {
        console.log(res)
        if (res.data.error) {
          swal({
            title: "Error!",
            text: res.data.error,
            icon: "error",
            timer: 2000,
            button: false
          });
        } else {
          swal({
            title: "Done!",
            text: "Create Account Successfully!",
            icon: "success",
            timer: 2000,
            button: false
          });
          resetForm();
          history.push("/dangnhap");
        }
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const auth = (email, password, history, resetForm) => {
  return dispatch => {
    dispatch(authStart());
    API.post("/signin", {
      email,
      password
    })
      .then(res => {
        if (res.data.error) {
          swal({
            title: "Error!",
            text: res.data.error,
            icon: "error",
            timer: 2000,
            button: false
          });
        } else {
          const { token } = res.data;
          const userId = jwtDecode(token)._id;
          localStorage.setItem("userToken", token);
          dispatch(authSuccess(token, userId));
          swal({
            title: "Done!",
            text: "Login Successfully!",
            icon: "success",
            timer: 2000,
            button: false
          });
          history.push("/");
          resetForm();
        }
      })
      .catch(err => {
        if (err) {
          swal({
            title: "Error!",
            text: err ? err.response.data.error : C.EMPTY_STRING,
            icon: "error",
            timer: 2000,
            button: false
          });

          dispatch(authFail(err));
        }
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  swal({
    title: "Done!",
    text: "Logout Successfully!",
    icon: "success",
    timer: 1500,
    button: false
  });
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
