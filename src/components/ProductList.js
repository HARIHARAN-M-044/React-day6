import React from 'react'

function Productlist(props) {
    const {products} = props;
  return (
    <div>
        {products.map((product)=>(
            <div>
                <ul>
                {product.no}.
                <li>Name : {product.name}</li>
                <p>Price : {product.price}</p>
                <img src={product.imageUrl} style={{height:"75px",weight:"50px"}} alt={product.name}/>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Productlist