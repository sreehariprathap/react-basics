import React, { useReducer, useRef } from "react"

const UseReducer = () => {
  const [checked, setChecked] = useReducer((checked) => !checked)
  const submit = (e) => {
    e.preventDefault()
    const nameValue = name.current.value
    const emailValue = email.current.value
    const concernValue = concern.current.value
    let formValue = {
      nameValue: nameValue,
      emailValue: emailValue,
      concernValue: concernValue,
    }
    console.log(formValue)
  }
  const name = useRef()
  const email = useRef()
  const concern = useRef()

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
          ref={name}
        />
        <input
          type="email"
          placeholder="Enter email here"
          className="input w-full max-w-xs shadow"
          ref={email}
        />
        <textarea
          className="textarea w-full max-w-xs shadow"
          placeholder="Enter concern"
          ref={concern}
        ></textarea>
        {/* <div className="flex space-x-3">
          <input type="checkbox" value={checked} onChange={setChecked} />
          <label htmlFor="">
            {checked
              ? "subscribed for news letter"
              : "not subscribed for news letter"}
          </label>
        </div> */}
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}

export default UseReducer
