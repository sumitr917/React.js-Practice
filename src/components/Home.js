import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const baseURL = "https://dummyjson.com/products?limit=6"

export default function Home() {
  let[products, setProducts] = useState([])
  useEffect(()=>{
    axios.get(baseURL).then((response) => {
      // console.log('response data : ',response.data)
      setProducts(response.data.products)
    })},[])
  
  console.log('products : ',products)

  var productsToDisplay = products.map(
    (p) =>
      <ProductCard key = {p.id} product = {p}/>
      )
  return (
    <div>
       {productsToDisplay}
    </div>
  )
}
