import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../data/asyncMock"
import Loading from "../Cargando/Cargando"

export default function ItemDetail (){
    const { productId } = useParams();
    const [product, setProduct] = useState({product: 0, stock: 0});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        if(quantity > 1 ){ 
            setQuantity(quantity - 1)
        }
    }

    const incrementQuantity = () => {
        if(quantity < product.stock){ //
            setQuantity(quantity + 1)
        }
    }

    const precioTotal = product.price * quantity;

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='mx-auto max-w-[1170px]'>
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className='w-full'/>
                </div>
                <div>
                    <h1 className='text-[45px] font-bold  uppercase opacity-75'>{product.name}</h1>
                    <p className='text-[20px]'>{product.despcription}</p>
                    
                    <p className='text-[20px] '>Stock: {product.stock}</p>

                    <div className='flex'>
                        <button onClick={decrementQuantity} className='rounded-[5px] hover:bg-teal-800 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> - </button>
                        <p className='text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity} className='rounded-[5px] hover:bg-sky-400 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> + </button>
                    </div>
                    
                    <p className='text-[20px] my-[20px]'>Precio: ${product.price}</p>

                    <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal}</p>
                    
                    <button className='bg-[#171e27] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#4c0519]'>Comprar</button>
                    
                </div>
            </div>
        </div>
    );



}