import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} =props;
  return (
    <div classname='breadcrum'>
      HOME <img src={arrow_icon} alt=""  product_desc={product.description}/> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum
