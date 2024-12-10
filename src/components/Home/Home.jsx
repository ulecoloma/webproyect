import React from "react"
export default function Home(){
    const Portada = './Guitarra.jpg'
    const Marca = './Gibson.png'
    const Fender = './Fender.png'
    const Ibanez = './Ibanez.png'
    return(
        <div>
            <div>
            <div className="flex items-center justify-center h-48">
                <h1 className="text-7xl font-bold uppercase opacity-50">Chiloe Instruments</h1>
            </div>
            <div className="flex items-center justify-center">
                <h4 className="text-3xl font-bold uppercase opacity-50">Tienda dedicada a la venta de guitarras, para que cumplas tu sueño de ser músico</h4>
            </div>
                <img src= {Portada} className="w-full" alt="Portada Principal"  />
                <div>
                    <div className="flex items-center justify-center h-48">
                        <h3 className="text-6xl font-bold uppercase ">Marcas con las que trabajamos</h3>
                    </div>
                    <div className="flex justify-center space-x-5">
                    <img src={Marca} className="h-60" alt="Marca" />
                    <img src={Fender}  className="h-60"alt="Marca Dos" />
                    <img src={Ibanez} className="h-60" alt="Marca Tres" />
                    </div>  
                </div>
                </div>
        </div>
    )
}