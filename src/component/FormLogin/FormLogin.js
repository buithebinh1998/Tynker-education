import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import './FormLogin.scss'

const FormLogin = () => {
  const StudentLoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email không hợp lệ')
      .required('Email không được bỏ trống'),
    password: Yup.string()
      .min(8, 'Quá ngắn')
      .max(50, 'Quá dài')
      .required('Mật khẩu không được bỏ trống')
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
        password: ''
      }}
      validationSchema={StudentLoginSchema}
      onSubmit={(values, props) => {
        handleSubmit(values)
        props.resetForm(props.initialValues)
      }}
    >
      {({ errors, touched }) => (
        <div className="hero-wrap hero-wrap-2">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters" data-scrollax-parent="true" />
            <div className="w4">
              <div className="signin-form profile agile">
                <h3>Đăng Nhập</h3>
                <div className="login-form">
                  <Form>
                    <Field type="text" name="email" placeholder="Email" />
                    {errors.email && touched.email ? (
                      <div className="Invalid"> {errors.email}</div>
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
                    {/* <div className="tp">
                        <input type="submit" defaultValue="LOGIN NOW" />
                      </div> */}
                    <button
                      className="form-submit-contact"
                      type="submit"
                      value="Submit"
                      defaultValue="LOGIN NOW"
                    >
                      Đăng nhập
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default FormLogin
