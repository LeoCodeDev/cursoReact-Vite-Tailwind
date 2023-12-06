import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../../Context'
import { Layout } from '../../Components/Layout'

function SignIn() {
  const context = useContext(Context)
  const navigate = useNavigate()
  const signOut = localStorage.getItem('signOut')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignedOut = context.signOut || parsedSignOut
  const imputData = useState({
    email: null,
    password: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('signOut', stringifiedSignOut)
    context.setSignOut(false)
    navigate('/')
  }

  return (
    <Layout>
      <form className="flex flex-col text-center w-[320px]">
        <h1 className="font-medium mb-4">Welcome</h1>
        <div className="flex flex-col items-start mb-4">
          <p>
            Email: <span className="font-medium">leoCodeDev@gmail.com</span>
          </p>
          <p>
            Password: <span className="font-medium">123456789</span>
          </p>
        </div>
        <button className="w-full border border-black bg-black text-white rounded-md p-2 mb-4">
          Log in
        </button>

        <div className="w-full flex flex-col items-start gap-2">
          <div className="flex gap-4 w-full justify-between">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="bg-transparent outline-none border-b-2 border-black"
            />
          </div>
          <div className="flex gap-4 w-full justify-between">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="bg-transparent outline-none border-b-2 border-black"
            />
          </div>
          <a
            href="#"
            className="text-sm font-light underline underline-offset-4 self-center p-2"
          >
            Forgot my password
          </a>
          <button
            className="w-full border border-black rounded-md p-2 mb-4 font-medium"
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </button>
        </div>
      </form>
    </Layout>
  )
}

export { SignIn }
