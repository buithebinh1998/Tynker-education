import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import './FormRegister.css'

const FormRegister = () => {
  const StudentSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email không hợp lệ')
      .required('Email không được bỏ trống'),
    username: Yup.string()
      .min(8, 'Quá ngắn')
      .max(50, 'Quá dài')
      .required('Tên đăng nhập không được bỏ trống'),
    password: Yup.string()
      .min(8, 'Quá ngắn')
      .max(50, 'Quá dài')
      .required('Mật khẩu không được bỏ trống'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Mật khẩu không khớp'
    ),
  })

  const handleSubmit = values => {
    axios
      .post('http://tynkerserver.herokuapp.com/tynkerdhsp/courses', values)
      .then(res => alert('Thanks for your information!'))
      .catch(err => alert(err))
  }

  return (
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={StudentSchema}
      onSubmit={(values, props) => {
        handleSubmit(values)
        props.resetForm(props.initialValues)
      }}
    >
      {({ errors, touched }) => (
        <div className="hero-wrap hero-wrap-2">
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
                    <Form>
                      <form action="#" method="post">
                        <Field type="text" name="email" placeholder="Email" />
                        {errors.email && touched.email ? (
                          <div className="Invalid"> {errors.email}</div>
                        ) : (
                          ''
                        )}
                        <Field
                          type="text"
                          name="username"
                          placeholder="Tên đăng nhập"
                        />
                        {errors.username && touched.username ? (
                          <div className="Invalid"> {errors.username}</div>
                        ) : (
                          ''
                        )}
                        <Field
                          name="password"
                          maxLength="20"
                          tabIndex="10"
                          type="password"
                          placeholder="Mật khẩu"
                        />
                        {errors.password && touched.password ? (
                          <div className="Invalid">{errors.password}</div>
                        ) : (
                          ''
                        )}
                        <Field
                          type="password"
                          name="passwordConfirmation"
                          maxLength="20"
                          tabIndex="10"
                          placeholder="Xác thực mật khẩu"
                        />
                        {errors.passwordConfirmation && touched.passwordConfirmation ? (
                          <div className="Invalid">
                            {errors.passwordConfirmation}
                          </div>
                        ) : (
                          ''
                        )}
                        {/* <input type="submit"  /> */}
                        <button
                          className="form-submit-contact"
                          type="submit"
                          value="Submit"
                          defaultValue="REGISTER"
                        >
                          Đăng ký
                        </button>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default FormRegister
