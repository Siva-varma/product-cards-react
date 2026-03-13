import React from 'react'
import './productsCard.css'

const ProductCard = (props) => {
  return (
    <div className="card">
        <div className="img">
            <img src={props.product.image} alt={props.product.name} className="card-image" />
        </div>
        <div className="card-content">
            <h2 className="title">{props.product.name}</h2>
            <p className="category">{props.product.category}</p>
            <p className="price">${props.product.price}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard