import React, { useState, useEffect } from "react";
import auth from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import LoadingSpinnerAuth from "../Layout/LoadingSpinnerAuth";
import "../../styles/AuthForm.scss";

function AuthForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [authload, setAuthload] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleLogIn = async () => {
    setAuthload(true);
    if (login) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setName("");
        await updateProfile(auth.currentUser).catch((err) => console.log(err));
        setAuthload(false);
        navigate("/");
      } catch (err) {
        setMessage(/\(([^)]+)\)/.exec(err.message)[1]);
        setShow(true);
        setAuthload(false);
      }
    } else {
      try {
        if (name == "") {
          console.log("null");
          setMessage("name null");
          setShow(true);
          setAuthload(false);
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setName("");

        await updateProfile(auth.currentUser, { displayName: name }).catch(
          (err) => console.log(err)
        );
        navigate("/");
        setAuthload(false);
      } catch (err) {
        setMessage(/\(([^)]+)\)/.exec(err.message)[1]);
        setShow(true);
        setAuthload(false);
      }
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [show]);
  return (
    <>
      
      <div className="login">
        {login ? (
          <>
            <br />
            EMAIL :
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@gmail.com"
            />
            <br />
            PASSWORD :
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your password"
            />
            <br />
            <button onClick={handleLogIn}>
              {authload && <LoadingSpinnerAuth />}Login
            </button>
            <div>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setLogin(false);
                  setPassword("");
                  setEmail("");
                  setShow(false);
                  setMessage("");
                }}
              >
                Click here to Login
              </span>
            </div>
          </>
        ) : (
          <>
            <br />
            NAME :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
            />
            <br />
            EMAIL :
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@gmail.com"
            />
            <br />
            PASSWORD :
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your password"
            />
            <br />
            <button onClick={handleLogIn}>
              {authload && <LoadingSpinnerAuth />}Signup
            </button>
            <div>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setLogin(true);
                  setPassword("");
                  setEmail("");
                  setName("");
                  setShow(false);
                  setMessage("");
                }}
              >
                Click here to SignUp
              </span>
            </div>
          </>
        )}
      </div>
      <div className="alert">
        {show && (
         <Alert severity="error"> 
            <p>
                {message}
            </p> 
         </Alert>
        )}
      </div>
    </>
  );
}

export default AuthForm;
