import { useLoginError } from "./useError.js";
import { Navigate, redirect ,useNavigate} from "react-router-dom";

import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
export default () => {
  console.log('in login')
  function setToLocal(Apidata){
      localStorage.setItem('stdata',JSON.stringify(Apidata))
  }
  const isDataAvail = JSON.parse(localStorage.getItem('stdata'))
  const navigate = useNavigate()
  function redirect(){
    navigate('/dashboard',{replace:true})
  }
  async function check(logindata) {


    const api = await fetch("http://localhost:8000/students/login/check/", {
      method: "POST",
      body: logindata,
    });
    const resp = await api.json();
    if (resp.suc) {
      setToLocal(resp.suc)
      setTimeout(()=>{
        redirect()
      },1000)
    } else {
      console.log(resp.err);
      useLoginError(true, resp.err);
    }
  }
  function submit(e) {
    e.preventDefault();
    const form = document.getElementById("form");
    const logindata = new FormData(form);
    check(logindata);
  }
  return (
    <>
    <div className="login-fullpage-container">
      <form className="login-form-container" id="form" onSubmit={submit}>
        <span className="login-title">Login</span>
        <div className="userid-outer">
          <span className="material-symbols-outlined" id="userid-icon">
            person
          </span>
          <input
            className="input-userid"
            type="text"
            placeholder="USER-ID"
            name="userid"
            id="userid"
            defaultValue={isDataAvail?isDataAvail.userid:''}
            onChange={() => {
              useLoginError(false, "userid");
            }}
            required
          />
          <span className="errormsg" id="userid-errormsg">
            <span className="material-symbols-outlined">error</span>
            <span> User-Id not found or try to register</span>
          </span>
          <span className="underline" id="userid-underline"></span>
        </div>
        <div className="password-outer">
          <span className="material-symbols-outlined" id="password-icon">
            lock
          </span>
          <input
            type="password"
            className="input-password"
            placeholder="PASSWORD"
            name="password"
            id="password"
            onChange={() => {
              useLoginError(false, "password");
            }}
            required
          />
          <span className="errormsg" id="password-errormsg">
            <span className="material-symbols-outlined">error</span>
            <span>Incorrect Password</span>
          </span>
          <span className="underline" id="password-underline"></span>
        </div>
        <div className="fgnew">
          <Link to="/forgetpassword">forget password</Link>
          <Link to="/register">register</Link>
        </div>
        <button type="submit" className="btn">
          SUBMIT
        </button>
      </form>
      </div>
    </>
  );
};
