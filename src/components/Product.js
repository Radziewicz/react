import React from 'react';
import './Product.css';

const Product = props => (
<div className="card">
    <div className="header">
        <div className="name">{props.name}</div> 
        <div className="price">{props.price} EUR</div>
    </div>
    <img src={props.image} alt=""/>
</div>

     

)

export default Product;