import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../../../Components/DataProvider/DataProvider";
import { auth } from "../../../Utility/firebase";
import classes from "./Signup.module.css";
import { Type } from "../../../Utility/action.type";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navstateData = useLocation();
  console.log(navstateData);

  const authHandler = async (e) => {
    e.preventDefault();
    const action = e.target.name; // "signin" or "signup"

    if (action === "signin") {
      setLoading((prev) => ({ ...prev, signIn: true }));
      try {
        const userInfo = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({ type: Type.SET_USER, user: userInfo.user });
        navigate("/");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading((prev) => ({ ...prev, signIn: false }));
        navigate(navstateData?.state?.redirect || "/")
      }
    }

    if (action === "signup") {
      setLoading((prev) => ({ ...prev, signUp: true }));
      try {
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({ type: Type.SET_USER, user: userInfo.user });
        navigate("/");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading((prev) => ({ ...prev, signUp: false }));
      }
    }
  };

  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/1920px-Amazon_2024.svg.png"
          alt="Amazon Logo"
          className={classes.logo}
        />
      </Link>

      {/* Auth Container */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navstateData?.state?.msg && (
          <small style={{color:"red", textAlign:"center", fontFamily:"arial"}}
          >

            {navstateData?.state?.msg}
          </small>
        )

          
        }
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* Sign Up Button */}
        <button
          type="button"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {error && (
          <small
            style={{ paddingTop: "5px", color: "red", fontWeight: "bold" }}
          >
            {error}
          </small>
        )}
      </div>
    </section>
  );
}

export default Auth;
