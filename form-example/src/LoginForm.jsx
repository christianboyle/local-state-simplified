import { useRef } from 'react'

export function LoginForm({ onSubmit }) {
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input ref={emailRef} type='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input ref={passwordRef} type='password' id='password' />
      <button type='submit'>Submit</button>
    </form>
  )
}
