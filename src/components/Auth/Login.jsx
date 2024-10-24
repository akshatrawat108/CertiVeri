import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Email is", email)
        console.log("Password is", password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-500'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center p-20 border-red-500 rounded'>
                <input 
                value={email}
                onChange={(e)=>{
                        setEmail(e.target.value)
                }}
                required 
                className='border-2 border-red-500 rounded-full py-4 px-3 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter Your Email'
                />
                <input 
                value = {password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required
                 className='border-2 border-red-500 rounded-full py-4 px-3 text-xl mt-3  outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter Your Password' 
                 />
                <button className='bg-red-500 mt-5 rounded-full py-4 px-3 border-none text-xl text-white outline-none placeholder:text-white'>Log In</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
