import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const [email,setEmail]= useState('');
    const [otp,setOtp]= useState();
    const [password,setpassword]= useState();
    const [confirmPassword,setconfirmPassword]= useState();
    const [page,setPage]= useState('enterEmail');
    const navigate = useNavigate();

    const enterEmail = (e) => {
      e.preventDefault();
      const formData = new URLSearchParams();
      formData.append("email", email);
      fetch('http://localhost:8080/user/forgot',{
        method: "POST",
        body: formData.toString(),
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }).then(res => res.json())
      .then(result => {
        if(result === "OTP sent successfully"){
          setPage('matchOtp');
        }else{
          alert(result);
        }
      })
    }
    const matchOtp = (e) => {
      e.preventDefault();
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("otp", otp);
      fetch('http://localhost:8080/user/matchOtp',{
        method: "POST",
        body: formData.toString(),
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }).then(res => res.json())
      .then(result => {
        if(result === "OTP verified"){
          alert(result);
          setPage('enterPassword');
        }else{
          alert(result);
        }
      })
    }
    const enterPassword = (e) => {
      e.preventDefault();
      if(password===confirmPassword){
        const formData = new URLSearchParams();
        formData.append("email", email);
        formData.append("password", password);
        fetch('http://localhost:8080/user/updatePassword',{
          method: "POST",
          body: formData.toString(),
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        }).then(res => res.json())
        .then(result => {
          if(result === "password changed successfully"){
            alert(result);
            navigate('/login');
          }else{
            alert(result);
          }
        })
      }else{
        alert("confirm password does not match");
      }
    }

    useEffect(() => {
      console.log(page)
    },[page])
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot Password ?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {
            page === "enterEmail" && <form className="space-y-6" onSubmit={enterEmail}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
          </form>
          }
          {
            page === "matchOtp" && <form className="space-y-6" onSubmit={matchOtp}>
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Otp
              </label>
              <div className="mt-2">
                <input
                  id="otp"
                  name="otp"
                  type="number"
                  autoComplete="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check
              </button>
            </div>
          </form>
          }
          {
            page === "enterPassword" && <form className="space-y-6" onSubmit={enterPassword}>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
          </form>
          }
          

          <p className="mt-10 text-center text-sm text-gray-500">
            Remember Password ?
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Go to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword