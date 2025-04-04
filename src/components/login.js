import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login/login.scss";
import { useForm } from "react-hook-form";
import LoginImage from "../assets/Images/LoginTheme.webp";
// import KDCALogo from "../assets/Images/kdca_logo.png";
import KDCAImage from "../assets/Images/kdca_text.png";
import axios from 'axios';

function Login() {
  
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const onSubmit = (any) => {
    console.log("form Data", any);
  };

  function onRegister() {
    navigate("/newRegister");
  }


  return (
    <div className="main-container col-md-12">
      <div className="container row d-flex col-md-12 " id="container">
      <div className="row col-md-6 fisrtPart">
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="sign-in-container text-center"
      >
      
        <div className="">
        <img className="kdca" src={KDCAImage}></img>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "This field is required!",
              },
            })}
            placeholder="UserName"
          />
          <p>{errors.name?.message}</p>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "This field is required!",
              },
            })}
            placeholder="Password"
          />
          <p>{errors.password?.message}</p>

        <a href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/" className="forgetPswd">
          Forgot password?
        </a>

        </div>
        <div className="logSignBtns">
        <button type="submit" className="m-1 signin">
          Sign In
        </button>
        <br></br>

        <button onClick={onRegister} className="m-1 signup">
          Sign Up
        </button>
        </div>
        
      </form>
      

      </div>

      <div className="overlay-container col-md-6">
        <img className="loginImg" src={LoginImage}></img>
      </div>

      </div>
    </div>
  );
}

export default Login;


