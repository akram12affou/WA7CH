import React, { useState } from "react";
import auth from "../../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../../styles/AuthForm.scss";
function AuthForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const handleLogIn = async () => {
    if (login) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setName("");
        await updateProfile(auth.currentUser).catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setName("");
        await updateProfile(auth.currentUser, { displayName: name }).catch(
          (err) => console.log(err)
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      {login ? (
        <>
          EMAIL :
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@gmail.com"
          />
          PASSWORD :
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
          />
          <button onClick={handleLogIn}>Login</button>
          <div>
            Don't have an account?{" "}
            <span
              onClick={() => {
                setLogin(false);
                setPassword("");
                setEmail("");
              }}
            >
              Click here to Login
            </span>
          </div>
        </>
      ) : (
        <>
          NAME :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name"
          />
          EMAIL :
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@gmail.com"
          />
          PASSWORD :
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
          />
          <button onClick={handleLogIn}>Signup</button>
          <div>
            Already have an account?{" "}
            <span
              onClick={() => {
                setLogin(true);
                setPassword("");
                setEmail("");
                setName("");
              }}
            >
              Click here to SignUp
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default AuthForm;
