import React from "react"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"

const Card = (props) => {
  return (
    <>
      <div className="card w-64 bg-base-100 shadow-xl">
        <figure>
          <img
            src={props.image}
            alt="Shoes"
            className="w-full h-32 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>price : {props.price}</p>
          <div className="flex flex-row justify-center space-x-2">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">
              <ShoppingCartIcon className="text-white h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
