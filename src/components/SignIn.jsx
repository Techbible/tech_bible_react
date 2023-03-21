import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {auth, provider} from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function SignIn() {


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState(null);

  const handleSignIn= (e) =>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              console.log(userCredential)
              navigate("/");
           })
           .catch((error) =>{
              console.log(error);
           })
  }

  const handleGoogleSignIn = () =>{
      signInWithPopup(auth,provider)
      .then((data)=>{
          setUserData(data.user.email)
          localStorage.setItem("email",data.user.email)
          navigate("/")
      })
  }

  return (
    <div className="sign-in-ebw">
    <div className="auto-group-1hg9-H97">
      <div className="auto-group-gz6d-6cM">
      <Link to='/'>  <div className="tech-bible-logo-71f">
          <p className="tech-bible-vzh no-dec">
          Tech
          <br/>
          Bible
          </p>
        </div></Link>
        <p className="you-dont-have-an-account-yet--zDs">You don't have an account yet ?</p>
        <Link to="/signup"><div className="auto-group-h2er-qEV">Sign up</div></Link>
      </div>
     <img  alt="pic" className="vector-69-12V"src="REPLACE_IMAGE:1:210"/>
    </div>
    <div className="auto-group-ec53-2TP">
      <div className="rectangle-99-4oP">
      </div>
      <p className="welcome-back-2dj"> Sign in </p>
     <img  alt="pic" className="vector-68-bKT" src="REPLACE_IMAGE:1:194"/>
      <div className="or-sign-in-with-google-e2q" onClick={handleGoogleSignIn}>Or Sign in with google</div>
      <p className="e-mail-Vp9">E-mail</p>
      <p className="password-AvH">Password</p>
      <div className="rectangle-102-3z5">
      </div>
      <p className="sign-up-kNh" onClick={(e)=>handleSignIn(e)}>Sign In</p>
      <div className="rectangle-100-cQu">
      </div>
      
      <div className="rectangle-101-WFP">
      </div>
      <input type={"password"}
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      placeholder="8 characters minimum"
      className="characters-minimum-Qbf"
        />

      <input type={"email"}
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      placeholder='Example@site.com' 
      className="examplesitecom-Gtm" />

     <img  alt="pic" className="item-561127-1-wzu" src="/assets/mail.png"/>
     <img  alt="pic" className="iconspassword-512-1-3o3" src="/assets/iconspassword-512-1-Fj3.png"/>
      <p className="you-dont-have-an-account-click-here-to-sign-up-Xy7">
        <span className="you-dont-have-an-account-click-here-to-sign-up-Xy7-sub-0">You don't have an account ? Click here to </span>
        <span className="you-dont-have-an-account-click-here-to-sign-up-Xy7-sub-1">Sign in</span>
      </p>
      <p className="forgot-password--u6V">Forgot Password ?</p>
    </div>
  </div>
  )
}

export default SignIn