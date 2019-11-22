import { OAuthAPI as API } from "../service/AuthenticationAPI.service";
import * as jwtDecode from "jwt-decode";
import * as actionTypes from "./actionType";
import swal from "sweetalert";
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
          console.log(res.data.error)
        if (res.data.error) {
          console.log(res.data.error)
          console.log('failed')
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
          dispatch(authSuccess(token, userId));
          swal({
            title: "Done!",
            text: "Login Successfully!",
            icon: "success",
            timer: 2000,
            button: false
          });
          history.push('/learn')
          resetForm();
        }
      })
      .catch(err => {
        // swal({
        //   title: "Opp!",
        //   text: err,
        //   icon: "error",
        //   timer: 2000,
        //   button: false
        // });
        // history.push('/dangnhap')
        dispatch(authFail(err));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
