import React from "react"

const Customer = (props) => {
  return (
    <div>
      <a className="avatar online" href={props.link}>
        <div className="w-24 rounded-full">
          <img src={props.img} />
        </div>
      </a>
    </div>
  )
}

export default Customer
