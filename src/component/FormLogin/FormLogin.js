import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


import './FormLogin.css'

const FormLogin = () => {
  const CustomerSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'Too short')
      .max(12, 'Too long')
      .required('Phone number is required'),
    firstName: Yup.string()
      .max(50, 'Too long')
      .required('First Name is required'),
    lastName: Yup.string()
      .max(50, 'Too long')
      .required('Last Name is required'),
    company: Yup.string()
      .max(50, 'Too long')
      .required('Company is required'),
    description: Yup.string().required('Description is required'),
    field: Yup.string().required('Please choose your interest')
  })
  return (
    <div className="hero-wrap hero-wrap-2">
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters" data-scrollax-parent="true" />
        <div className="w3">
          <div className="signin-form profile">
            <h3>Đăng Nhập</h3>
            <div className="login-form">
              <form action="#" method="post">
                <input type="text" name="email" placeholder="E-mail" required />
                <input type="password" name="password" placeholder="Mật khẩu" required />
                <div className="tp">
                  <input type="submit" defaultValue="LOGIN NOW" />
                </div>
              </form>
            </div>
            <p><a href="/"> Bạn chưa có tài khoản?</a></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FormLogin
