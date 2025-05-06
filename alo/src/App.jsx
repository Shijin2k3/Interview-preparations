import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [value, setValue] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' }) 
  }

  const validate = () => {
    const newErrors = {}
    if (!value.email) {
      newErrors.email = 'Email is required'
    }

    if (!value.password) {
      newErrors.password = 'Password is required'
    } else if (value.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log(value)
      alert('Login success')
    } else {
      alert('Validation failed')
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
    
      <div className="w-full min-h-screen md:w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:4l font-bold text-blue-700 ">
            Attendance<span className="text-black">MadeEasy</span>
          </h1>
          <h3 className="text-lg mt-2">Productivity on Display</h3>
        </div>
      </div>

    
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-11/12 sm:w-3/4 max-w-md bg-gray-50 p-6 rounded shadow"
        >
          <h1 className="text-blue-600 font-extrabold text-4xl mb-4">Alo</h1>
          <h2 className="text-2xl font-semibold mb-4">Welcome Back!</h2>
          <h1 className="mb-2">Start managing your team</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={value.email}
            />
            {errors.email && (
              <p className="text-blue-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              value={value.password}
            />
            {errors.password && (
              <p className="text-blue-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default App