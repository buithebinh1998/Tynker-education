import React from 'react'
import { Field, withFormik } from 'formik'
import * as Yup from 'yup'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
// import axios from 'axios'
// import { OAuthAPI as API } from '../../service/AuthenticationAPI.service'
import * as actions from '../../actions/index'
import './FormRegister.scss'

const StudentSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Email không được bỏ trống'),
  username: Yup.string()
    .min(8, 'Quá ngắn')
    .max(50, 'Quá dài')
    .required('Tên đăng nhập không được bỏ trống'),
  pass: Yup.string()
    .min(8, 'Quá ngắn')
    .max(50, 'Quá dài')
    .required('Mật khẩu không được bỏ trống'),
  passCon: Yup.string().oneOf(
    [Yup.ref('pass'), null],
    'Mật khẩu không khớp'
  )
})

const FormRegister = (props) => {
  const { values, touched, errors, handleSubmit } = props;

  return (
    <div className="hero-wrap hero-wrap-3">
      <div className="overlay" />
      <div className="container">
        <div
          className="row no-gutters slider-text align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div className="agile">
            <div className="signin-form profile">
              <h3>Đăng Ký</h3>
              <div className="login-form">
                <form onSubmit={handleSubmit}>
                  <Field type="text" name="email" placeholder="Email" value={values.email} />
                  {errors.email && touched.email ? (
                    <div className="Invalid"> {errors.email}</div>
                  ) : (
                      ''
                    )}
                  <Field
                    type="text"
                    name="username"
                    placeholder="Tên đăng nhập"
                    value={values.username}
                  />
                  {errors.username && touched.username ? (
                    <div className="Invalid"> {errors.username}</div>
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
                  <Field
                    type="password"
                    name="passCon"
                    maxLength="20"
                    tabIndex="10"
                    placeholder="Xác thực mật khẩu"
                    value={values.passCon}
                  />
                  {errors.passCon
                    && touched.passCon ? (
                      <div className="Invalid">
                        {errors.passCon}
                      </div>
                    ) : (
                      ''
                    )}
                  <button
                    className="form-submit-contact"
                    type="submit"
                    value="Submit"
                    defaultValue="REGISTER"
                  >
                    Đăng ký
                      </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const EnhanceForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    username: "",
    pass: "",
    passCon: ""
  }),
  validationSchema: StudentSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const { onRegister, history } = props;
    const { email, pass } = values;
    setTimeout(async () => {
      await onRegister(email, pass, history, resetForm);
      setSubmitting(false);
    }, 500);
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (email, password, history, resetForm) =>
      dispatch(actions.register(email, password, history, resetForm))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EnhanceForm(FormRegister)));

