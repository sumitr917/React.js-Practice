import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='border product-card'>
      <div className='product-image border'>
        <img alt='product-image' src={props.product.thumbnail}></img>
      </div>
      <div className='product-details border'>
        <p>{props.product.brand}</p>
        <p>{props.product.description}</p>
        <p>Price {props.product.price}</p>
        <p>Rating {props.product.rating}</p>
      </div>
    </div>
  )
}
