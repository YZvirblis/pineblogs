import React, { FormEvent } from 'react'

function LoginModal() {
    const labelStyle = "flex flex-col text-left justify-center items-center"

    const submitForm = (e: FormEvent) => {
        //@ts-ignore
        const {username, email, password, retypepass} = e.target
        e.preventDefault()
        console.log(username.value, email.value ,password.value ,retypepass.value)
    }
  return (
    <div className='md:w-1/2 w-full bg-blue-100 rounded flex align-center justify-center items-center text-center flex-col p-3 m-3'>
        <h1 className='text-2xl underline m-3'>Register</h1>
        <form className='flex w-full md:flex-row flex-col' action="submit" onSubmit={(e) => submitForm(e)}>
            <div className='flex flex-col w-full p-3 m-3 text-left items-center justify-center bg-blue-200 rounded'>
                <label className={labelStyle} htmlFor="username">
                    Username
                    <input name='username' type="text" />
                </label>
                <label className={labelStyle} htmlFor="email">
                    Email
                    <input name='email' type="email" />
                </label>
                <label className={labelStyle} htmlFor="password">
                    Password
                    <input name="password" type="password" />
                </label>
                <label className={labelStyle} htmlFor="retypepass">
                    Re-enter password
                    <input name='retypepass' type="password" />
                </label>
            </div>
            <div className='flex flex-col w-full m-3 p-3 items-center justify-center'>
                <button type='submit' className='bg-blue-500 rounded w-1/2 p-2 m-3 text-white'>Register</button>
                <span className='text-sm text-gray-500'>Already have an account? <span className='text-blue-500 underline cursor-pointer'>Log In</span></span>
            </div>
        </form>
    </div>
  )
}

export default LoginModal