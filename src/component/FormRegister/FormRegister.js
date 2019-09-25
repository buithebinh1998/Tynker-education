import React from 'react'
import './FormRegister.css'
const FormRegister = props => {
    return(
        <div className="hero-wrap hero-wrap-2">
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div className="agile">
                <div className="signin-form profile">
                <h3>Đăng Ký</h3>
                <div className="login-form">
                    <form action="#" method="post">
                    <input type="text" name="email" placeholder="E-mail" required />
                    <input type="text" name="name" placeholder="Tên Đăng Nhập" required />
                    <input type="password" name="password" placeholder="Mật khẩu" required />
                    <input type="password" name="password" placeholder="Xác thực mật khẩu" required />
                    <input type="submit" defaultValue="REGISTER" />
                    </form>
                </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    )
}

export default FormRegister

