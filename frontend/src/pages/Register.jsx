import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import styled from 'styled-components'
import axios from 'axios'
import { toast } from 'react-toastify'
import { registerRoute } from '../utils/APIRoutes'



function Register() {
  const navigate = useNavigate()
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  
  React.useEffect(() => {
    if (localStorage
      .getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate('/')
    }
  }, [])
  
  const handleChange = (event) => {
    setValues({
      ...values, [event.target.name]: event.target.value
    })
  }
  
  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values
    if (password !== confirmPassword) {
      toast.error(
        'Password and Confirm Password should be same.',
        toastOptions
      )
      return false
    } else if (username.length < 3) {
      toast.error(
        'Username should be equal or greater than 3 characters.',
        toastOptions
      )
      return false
    } else if (password.length < 8) {
      toast.error(
        'Password should be equal or greater than 8 characters.',
        toastOptions
      )
      return false
    } else if (email === '') {
      toast.error('Email is required.', toastOptions)
      return false
    }
    return true
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (handleValidation()) {
      const { email, username, password } = values
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password
      })
      
      if (data.status === false) {
        toast.error(data.msg, toastOptions)
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        )
        navigate('/')
      }
    }
  }

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>goodMorning</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #dfe9f2;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #1a191aa6;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #f2cf1d;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #f2ab1a;
      outline: none;
    }
  }
  button {
    background-color: #f2cf1d;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #f2cf1d;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #f2cf1d;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register