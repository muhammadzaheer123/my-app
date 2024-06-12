import React from 'react'
import "./Product.css"
const ProductCompo = ({ img, Tittle, Description }) => {
    return (
        <>
            <div className="prodcutCard">
                <img src={img} alt="" />
                <h1>{Tittle}</h1>
                <p>{Description}</p>
                <button>Buy Now</button>
            </div>
        </>
    )
}

export default ProductCompo
