import axios from "axios"
import React, { useEffect, useState } from "react"
import Customer from "./Customer"
import "./loaderAnimation.css"

const UsersData = () => {
  const apiUrl = "https://api.github.com/users"
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios
      .get(apiUrl)
      .then((response) => {
        setUsers(response.data)
      })
      .then(() => setLoading(false))
      .catch(setError(error))
  }, [])
  console.log(users)

  if (loading) {
    return (
      <div className="bg-slate-800">
        <div class="wrapper">
          <span class="dot"></span>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="p-5 bg-slate-800">
                <h2 className="text-2xl font-bold text-white my-4">Customers</h2>
        <ul className="flex flex-row flex-wrap justify-center items-center gap-3">
          {users.map((item) => (
            <Customer
              key={item.id}
              img={item.avatar_url}
              link={item.url}
              active={item.admin}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default UsersData
