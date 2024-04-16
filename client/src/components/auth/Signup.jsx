import "./Auth.scss";
import logo from "../../img/logo.png";
import { Link, Navigate } from "react-router-dom";
import { signupUser } from "../../store/thunks/user";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import isValidEmail from "./isValidEmail";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Signup = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // TODO: Validate all inputs
  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm)
      return toast.warn("Passwords do not match");
    else if (!isValidEmail(email)) {
      return toast.warn("Email is not valid");
    }
<<<<<<< HEAD

=======
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
    dispatch(signupUser({ name, email, password, passwordConfirm }));
  };

  return (
    <>
      {!user.auth ? (
        <div className="auth">
          <form className="auth__form" onSubmit={handleSignup}>
            <img className="auth__form-logo" src={logo} alt="Spotify logo"/>
            <Link to="/login" className="auth__form-link">
              Log In here
            </Link>
            <Input
              name="name"
              placeholder="Name"
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type={email}
              name="email"
              placeholder="Email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              name="passwordConfirm"
              placeholder="Password Confirm"
              required={true}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Button type="submit">
              {user.loading ? "Loading" : "Sign Up"}
            </Button>
          </form>

<<<<<<< HEAD
          
=======
          <p className="note">
            
          </p>
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
        </div>
      ) : (
        <Navigate to={"/"}/>
      )}
    </>
  );
};

export default Signup;
