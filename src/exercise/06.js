// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const ref = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()

    // const value = event.target[0].value
    // const value = event.target.elements.userNameInput.value

    const value = ref.current.value

    // console.dir(event.target.elements.userNameInput.value)

    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input ref={ref} id="userNameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
