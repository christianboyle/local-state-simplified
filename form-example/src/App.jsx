import { LoginForm } from './LoginForm'

function App() {
  function onSubmit(formData) {
    console.log(formData)
  }

  return <LoginForm onSubmit={onSubmit} />
}

export default App
