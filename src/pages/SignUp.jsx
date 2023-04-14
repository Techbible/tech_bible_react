import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { doc, setDoc,Timestamp } from "firebase/firestore";

//integrating open AI in order to generate auto profiles pictures for the users
import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
  apiKey : process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration);



function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FullName, setFullName] = useState("");

  const [generatedImgURL, setGenratedImgURL] = useState();

  //it's basically just the description of the image that you want to be generated 
  // const [userPrompt,setUserPrompt] = useState("profile picture on avatar format");

  const [userData, setUserData] = useState(null);

  // const generateImage = async ()=>{
  //   const response =await openai.createImage( {
  //     prompt : "profile picture vector",
  //     n : 1,
  //     size : "256x256"
  //   });
  //   console.log(response.data.data[0].url);
  //   setGenratedImgURL(response.data.data[0].url);

  // }


  const handleSignUp = (e) => {
    e.preventDefault();
    // generateImage();
    createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        //https://t3.ftcdn.net/jpg/05/11/52/90/360_F_511529094_PISGWTmlfmBu1g4nocqdVKaHBnzMDWrN.jpg
       
        // console.log(generatedImgURL);

        const docData = {
          uid : result.user.uid,
          username : FullName,
          bio : "",
          interests : [],
          folders : [],
          photo: "https://picsum.photos/200",
          isAdmin : false,
          timestamp:Timestamp.now()
        };
        await setDoc(doc(db, "Users", result.user.uid), docData);
        navigate("/");
      }
    );
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider).then(async(data) => {
      setUserData(data.user.email);
      localStorage.setItem("email", data.user.email);
      const GoogleData= {
        uid : data.user.uid,
        username : data.user.displayName,
        bio : "",
        interests : [],
        folders : [],
        photo: data.user.photoURL,
        isAdmin : false,
        timestamp:Timestamp.now()
      };
      // console.log(data);
      await setDoc(doc(db, "Users", data.user.uid), GoogleData);
      navigate("/");
    });
  };
  return (
    <div className="sign-up-i5B">
      <div className="auto-group-yw4r-Qyb">
        <div className="auto-group-gvnh-HXb">
          <Link to="/">
            <div className="tech-bible-logo-YyK">
              <p className="tech-bible-pvq">
                Tech
                <br />
                Bible
              </p>
            </div>
          </Link>
          <p className="you-already-have-an-account--tA1">
            You already have an account ?
          </p>
          <Link to="/signin">
            <div className="auto-group-bmrx-LXo">Sign in</div>
          </Link>
        </div>
      </div>
      <div className="auto-group-kmcz-SjF">
        <div className="rectangle-99-SMs"></div>
        <p className="by-clicking-on-sign-up-you-agree-to-our-conditions-of-use-and-our-privacy-settings-HdP">
          By clicking on sign up you agree to our conditions of use and our
          privacy settings
        </p>
        <p className="new-account-76d">New Account</p>
        <form onSubmit={handleSignUp}>
          <div
            className="or-sign-up-with-google-Gdj"
            onClick={handleGoogleSignUp}
          >
            Or Sign up with google
          </div>
          <p className="full-name-M9P">Full Name</p>
          <p className="email-Eiy">Email</p>
          <p className="password-uq7">Password</p>
          <div className="rectangle-102-PVP"></div>
          <button style={{backgroundColor:"transparent",border:"0px",cursor:"pointer"}} className="sign-up-5ND">Sign Up</button>
          <div className="rectangle-100-xB7"></div>
          <div className="rectangle-101-4E9"></div>
          <div className="rectangle-66-kcm"></div>
          <input
            type={"text"}
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            className="full-name-rA1 sign-up_input"
            required
          />
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="8 characters minimum"
            className="characters-minimum-v9s sign-up_input"
            required
          />
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example@site.com"
            className="examplesitecom-Bbb sign-up_input"
            required
          />
          <img
            alt="pic"
            className="item-1-04-512-1-pPf"
            src="/assets/-k8d.png"
          />
          <img alt="pic" className="item-561127-1-hiM" src="/assets/-Yff.png" />
          <img
            alt="pic"
            className="iconspassword-512-1-Pr5"
            src="/assets/iconspassword-512-1.png"
          />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
