import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="sign-in-ebw">
    <div className="auto-group-1hg9-H97">
      <div className="auto-group-gz6d-6cM">
        <div className="tech-bible-logo-71f">
          <p className="tech-bible-vzh">
          Tech
          <br/>
          Bible
          </p>
        </div>
        <p className="you-dont-have-an-account-yet--zDs">You don’t have an account yet ?</p>
        <Link to="/signup"><div className="auto-group-h2er-qEV">Sign up</div></Link>
      </div>
     <img  alt="pic" className="vector-69-12V"src="REPLACE_IMAGE:1:210"/>
    </div>
    <div className="auto-group-ec53-2TP">
      <div className="rectangle-99-4oP">
      </div>
      <p className="welcome-back-2dj"> Sign in </p>
     <img  alt="pic" className="vector-68-bKT" src="REPLACE_IMAGE:1:194"/>
      <p className="or-sign-in-with-google-e2q">Or Sign in with google</p>
      <p className="e-mail-Vp9">E-mail</p>
      <p className="password-AvH">Password</p>
      <div className="rectangle-102-3z5">
      </div>
      <p className="sign-up-kNh">Sign Up</p>
      <div className="rectangle-100-cQu">
      </div>
      <div className="rectangle-101-WFP">
      </div>
      <input type={"email"} placeholder="8 characters minimum" className="characters-minimum-Qbf" />
      <input type="email" placeholder='Example@site.com' className="examplesitecom-Gtm" />
     <img  alt="pic" className="item-561127-1-wzu" src="/assets/mail.png"/>
     <img  alt="pic" className="iconspassword-512-1-3o3" src="/assets/iconspassword-512-1-Fj3.png"/>
      <p className="you-dont-have-an-account-click-here-to-sign-up-Xy7">
        <span className="you-dont-have-an-account-click-here-to-sign-up-Xy7-sub-0">You don’t have an account ? Click here to </span>
        <span className="you-dont-have-an-account-click-here-to-sign-up-Xy7-sub-1">Sign up</span>
      </p>
      <p className="forgot-password--u6V">Forgot Password ?</p>
    </div>
  </div>
  )
}

export default SignIn