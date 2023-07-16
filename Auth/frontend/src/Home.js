import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();

const handleClick = () => {
  localStorage.removeItem('token')
  navigate('/login');
}

  return (
    <button type='button' onClick={handleClick}>Logout</button>
  )
}

export default Home