import React from 'react'

const FormLogin = props => {
    return(
        <div className="w3">
        <div className="signin-form profile">
          <h3>Login</h3>
          <div className="login-form">
            <form action="#" method="post">
              <input type="text" name="email" placeholder="E-mail" required />
              <input type="password" name="password" placeholder="Password" required />
              <div className="tp">
                <input type="submit" defaultValue="LOGIN NOW" />
              </div>
            </form>
          </div>
          <div className="header-social wthree">
            <a href="/" className="face"><h5>Facebook</h5></a>
            <a href="/" className="goog"><h5>Google+</h5></a>
            <div className="clear" />
          </div>
          <p><a href="/"> Don't have an account?</a></p>
        </div>
      </div>
    )
}