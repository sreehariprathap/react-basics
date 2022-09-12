import React, { useState } from "react"

//custom form hook
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ]
}

const UseStateForm = () => {
  const [name, setName] = useInput("")
  const [email, setEmail] = useInput("")
  const [concern, setconcern] = useInput("")
  //   const [name, setName] = useState("")
  //   const [email, setEmail] = useState("")
  //   const [concern, setconcern] = useState("")
  const submit = (e) => {
    e.preventDefault()
    let formValue = {
      name: name.value,
      email: email.value,
      concern: concern.value,
    }
    console.log(formValue)
  }

  return (
    <div className="p-5">
      <form
        className="flex m-2 flex-col gap-2 justify-center items-center"
        onSubmit={submit}
      >
        <h2 className="text-2xl font-bold">Contact US</h2>
        <input
          type="text"
          placeholder="Enter name here"
          className="input w-full max-w-xs shadow"
          value={name}
          //   onChange={(event) => setName(event.target.value)}
          {...name}
        />
        <input
          type="email"
          placeholder="Enter email here"
          className="input w-full max-w-xs shadow"
          value={email}
          //   onChange={(event) => setEmail(event.target.value)}
          {...email}
        />
        <textarea
          className="textarea w-full max-w-xs shadow"
          placeholder="Enter concern"
          value={concern}
          //   onChange={(event) => setconcern(event.target.value)}
          {...concern}
        ></textarea>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}

export default UseStateForm
