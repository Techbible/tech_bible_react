import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase";



function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FullName, setFullName] = useState("");

  
  const handleSignUp= (e) =>{
      e.preventDefault();
      createUserWithEmailAndPassword (auth, email, password)
          .then((userCredential) =>{
              console.log(userCredential)
           })
           .catch((error) =>{
              console.log(error);
           })

  }
  return (
    <div className="sign-up-i5B">
    <div className="auto-group-yw4r-Qyb">
      <div className="auto-group-gvnh-HXb">
        <div className="tech-bible-logo-YyK">
          <p className="tech-bible-pvq">
          Tech
          <br/>
          Bible
          </p>
        </div>
        <p className="you-already-have-an-account--tA1">You already have an account ?</p>
        <Link to="/signin"><div className="auto-group-bmrx-LXo">Sign in</div></Link>
      </div>
     <img alt="pic" className="vector-69-LgD" src="REPLACE_IMAGE:1:239"/>
    </div>
    <div className="auto-group-kmcz-SjF">
      <div className="rectangle-99-SMs">
      </div>
      <p className="by-clicking-on-sign-up-you-agree-to-our-conditions-of-use-and-our-privacy-settings-HdP">By clicking on sign up you agree to our conditions of use and our privacy settings</p>
      <p className="new-account-76d">New Account</p>
      <form onSubmit={handleSignUp}>
     <img alt="pic" className="vector-68-ZjK" src="REPLACE_IMAGE:1:221"/>
      <button className="or-sign-up-with-google-Gdj">Or Sign up with google</button>
      <p className="full-name-M9P">Full Name</p>
      <p className="email-Eiy">Email</p>
      <p className="password-uq7">Password</p>
      <div className="rectangle-102-PVP">
      </div>
      <button className="sign-up-5ND">Sign Up</button>
      <div className="rectangle-100-xB7">
      </div>
      <div className="rectangle-101-4E9">
      </div>
      <div className="rectangle-66-kcm">
      </div>
      <input type={"text"} placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)} className="full-name-rA1 sign-up_input" required/>
      <input type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="8 characters minimum" className="characters-minimum-v9s sign-up_input" required/>
      <input type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Example@site.com" className="examplesitecom-Bbb sign-up_input" required />
     <img alt="pic" className="item-1-04-512-1-pPf" src="./assets/-k8d.png"/>
     <img alt="pic" className="item-561127-1-hiM" src="./assets/-Yff.png"/>
     <img alt="pic" className="iconspassword-512-1-Pr5" src="./assets/iconspassword-512-1.png"/>
     </form>
    </div>
  </div>
  )
}

export default SignUp