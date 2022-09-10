import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("");
    const [profilepic, setprofilePic] = useState("")
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            })
            );
        }).catch((error) => alert(error));
    };

   const register = () => {
           if(!name) {
               return alert("Please enter a full name!");
           }

           auth.createUserWithEmailAndPassword(email, password)
           .then(
               (userAuth) => {
               userAuth.user.updateProfile({
                   displayName: name,
                   photoURL: profilepic,
               })
               .then(() => {
                   dispatch(
                       login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilepic
                            })
                   );

               });
           }).catch((error) => alert(error))
   };
  
  
  return (
    <div className='login'>
    <img className='login__logo' src="data:image/png;base64,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" alt="" />
    
    <form >
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />
        <input value={profilepic} onChange={(e) => setprofilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" />
        <button type='submit' onClick={loginToApp}   >Sign In</button>
    </form>
    <p>Not  a member?{" "}
    <span className='login__register' onClick={register}>Register Now</span>
    </p>
    </div>
  )
}

export default Login