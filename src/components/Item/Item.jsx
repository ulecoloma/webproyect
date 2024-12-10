import { Link } from "react-router-dom"
import React from "react"
export default function Item({id, name, price, img}) {
    return(
        <div className="flex flex-col items-center my-[20px]">
            <Link to={`/products/${id}`} className="flex h-[290px]"><img src={img} alt="Imagen Productos" /></Link>
            <Link to={`/products/${id}`} className="text-[15px]  tracking-[1px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{name}</Link>
            <h4 className="text-[18px] font-normal mb-[20px] opacity-75">${price}</h4>
        </div>
    )

}