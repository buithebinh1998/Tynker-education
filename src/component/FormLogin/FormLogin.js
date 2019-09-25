import React from 'react'
import './FormLogin.css'
const FormLogin = props => {
    return(
      <div className="hero-wrap hero-wrap-2">
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
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
          <p><a href="/"> Bạn không có tài khoản?</a></p>
        </div>
      </div>
        </div>
      </div>
    </div>
   
    )
}

export default FormLogin