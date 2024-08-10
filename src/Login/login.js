import { useState } from "react";
import styles from "./login.module.css"

function Login(){
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isPwSame, setIsPwSame] = useState(true);
  const [password, setPassword] = useState("");
  const [Name,setName] = useState("");
  const url = "http://localhost:3000"
  function signIn(){
    fetch("").then(()=>{

    }).then(()=>{})
  }
    return <>
{/* <div class={styles.formBox+" mx-auto"}>
<form class={styles.form}>
    <span class={styles.title}>Sign up</span>
    <span class={styles.subtitles}>Create a free account with your email.</span>
    <div class={styles.formContainer}>
      <input type="text" class={styles.input} placeholder="Full Name"/>
			<input type="email" class={styles.input} placeholder="Email"/>
			<input type="password" class={styles.input} placeholder="Password"/>
    </div>
    <button>Sign up</button>
</form>
<div class={styles.formSection}>
  <p>Have an account? <a href="">Log in</a> </p>
</div>
</div> */}
{isSignedIn &&
  <div className={styles.mybody}>
  <div className={styles.myCon}>
     <div class={styles.formContainer}>
  <p class={styles.mytitle}>Welcome to Grocko</p>
  <div class={styles.form}>
    <input type="text" class={styles.input} placeholder="Enter user name" onChange={(e) => {
          setName(e.target.value);
          // setEmail(e.target.value);
        }}/>
    <input type="password" class={styles.input} style={{marginBottom:"0px"}} placeholder="Enter Password" onChange={(e)=>{
      setPassword(e.target.value);
    }}/>
    {/* {!isCorrect && <span style={{color:"red",marginLeft:"5px"}}>Incorrect email or password</span>} */}
    <p class={styles.pageLink}>
      <span class={styles.pageLinkLabel}>Forgot Password?</span>
    </p>
    {/* <div className="row">
      <div className="col">
      <button class="form-btn" onClick={() => {
            redirect();
          }}>Log in</button>
      </div>
      <div className="col">
        <button class="form-btn" onClick={() => {}}>
          Sign up
        </button>
      </div>
    </div> */}
    <button class={styles.formBtn} onClick={() => {
            // redirect();
            // login();
    }}>Log in</button>
    <button class={styles.formBtn} onClick={() => {
          // redirect();
          // nav("/signup");
          setIsSignedIn(false);
    }}>Sign up</button>
  </div>
  <p className={styles.signUpLabel}>
    Don't have an account?<span class="sign-up-link">Sign up</span>
  </p>
  <div class={styles.buttonsContainer}>
    <div class={styles.appleLoginButton}>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" class={styles.appleIcon} viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
      </svg>
      <span>Log in with Apple</span>
    </div>
    <div class={styles.googleLoginButton} onClick={() => {
            // googleLogin();
          }}>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" class={styles.googleIcon} viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
      </svg>
      <span>Log in with Google</span>
    </div>
  </div>
</div>

  </div>
  </div>
}
  {!isSignedIn &&
  <div className={styles.mybody}>
  <div className={styles.myCon}>
     <div class={styles.formContainer}>
  <p class={styles.mytitle}>Welcome to Grocko</p>
  <div class={styles.form}>
    <input type="text" class={styles.input} placeholder="UserName" onChange={(e) => {
          // setName(e.target.value);
          // setEmail(e.target.value);
        }}/>
    <input type="password" class={styles.input} placeholder="password" onChange={(e) => {
          // setName(e.target.value);
          // setEmail(e.target.value);
          setPassword(e.target.value);
        }}/>
    <input type="password" class={styles.input} style={{marginBottom:"0px"}} placeholder="Confirm Password" onChange={(e)=>{
      // setPassword(e.target.value);
      if(e.target.value !== password){
        setIsPwSame(false);
      }else{
        setIsPwSame(true);
      }
    }}/>
    {!isPwSame && <span className="text-danger">Both the password must be same!</span>}
    {/* {!isCorrect && <span style={{color:"red",marginLeft:"5px"}}>Incorrect email or password</span>} */}
    <p class={styles.pageLink}>
      <span class={styles.pageLinkLabel}>Forgot Password?</span>
    </p>
    {/* <div className="row">
      <div className="col">
      <button class="form-btn" onClick={() => {
            redirect();
          }}>Log in</button>
      </div>
      <div className="col">
        <button class="form-btn" onClick={() => {}}>
          Sign up
        </button>
      </div>
    </div> */}
    <button class={styles.formBtn} onClick={() => {
            // redirect();
            // nav("/signup");
      }}>Register</button>
    <button class={styles.formBtn} onClick={() => {
            setIsSignedIn(true);
    }}>Log in</button>
  </div>

  </div>
  </div>
  </div>
}
    </>
}
export default Login;