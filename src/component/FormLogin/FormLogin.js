import React from 'react'
import { Field, withFormik } from 'formik'
import * as Yup from 'yup'
// import axios from 'axios'
import { NavLink, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import './FormLogin.scss'
// import { OAuthAPI as API } from '../../service/AuthenticationAPI.service'
import * as actions from "../../actions/index";
import { C } from "../../constants/index";

const StudentLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Email không được bỏ trống'),
  pass: Yup.string()
    .min(8, 'Quá ngắn')
    .max(50, 'Quá dài')
    .required('Mật khẩu không được bỏ trống')
})
const FormLogin = (props) => {

  const {
    values,
    touched,
    errors,
    handleSubmit,
    isAuthenticated,
    loading
  } = props;
  let authRedirect = C.EMPTY_STRING;
  if (isAuthenticated) {
    authRedirect = <Redirect to={"/learn"} />;
  }
  return (
    <>
      {authRedirect}
      <div className="hero-wrap hero-wrap-2">
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters" data-scrollax-parent="true" />
          <div className="w4">
            <div className="signin-form profile agile">
              <h3>Đăng Nhập</h3>
              <div className="login-form">
                <form onSubmit={handleSubmit}>
                  <Field type="text" name="email" placeholder="Email" value={values.email} />
                  {errors.email && touched.email ? (
                    <div className="Invalid"> {errors.email}</div>
                  ) : (
                      ''
                    )}

                  <Field
                    name="pass"
                    maxLength="20"
                    tabIndex="10"
                    type="password"
                    placeholder="Mật khẩu"
                    value={values.pass}
                  />
                  {errors.pass && touched.pass ? (
                    <div className="Invalid">{errors.pass}</div>
                  ) : (
                      ''
                    )}
                  <button
                    className="form-submit-contact"
                    type="submit"
                    value="Submit"
                    defaultValue="LOGIN NOW"
                    disabled={loading}
                  >
                    Đăng nhập
                    </button>
                  <div className="text-center">
                    <span className="txt1">Create an account?</span>
                    <NavLink
                      to="/dangky"
                      className="txt2 hov1"
                      activeClassName="active"
                    >
                      Sign up
                </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const EnhanceForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    pass: ""
  }),
  validationSchema: StudentLoginSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const { onAuth, history } = props;
    const { email, pass } = values;
    setTimeout(async () => {
      await onAuth(email, pass, history, resetForm);
      setSubmitting(false);
    }, 500);
  }
});
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== C.EMPTY_STRING,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, history, resetForm) =>
      dispatch(actions.auth(email, password, history, resetForm))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EnhanceForm(FormLogin)));
