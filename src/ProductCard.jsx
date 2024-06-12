import React from 'react'
import LaptopImg from "./Assests/latpop.avif"
import "./Product.css"
import ProductCompo from './ProductCompo'
import { IMAGES } from './utils/Images'
const ProductCard = () => {
    return (
        <div>
            <div className="container">
                <ProductCompo img={IMAGES.Laptop1} Tittle={"Asus Laptop"} Description={"Super Cool"} />

                <ProductCompo img={IMAGES.Laptop2} Tittle={"Dell Laptop"} Description={"Super Cool"} />
                <ProductCompo img={IMAGES.Laptop1} Tittle={"Hp Laptop"} Description={"Super Cool"} />
                <ProductCompo img={IMAGES.Laptop2} Tittle={"Apple Laptop"} Description={"Super Cool"} />

            </div>
        </div>
    )
}

export default ProductCard
