import { Link } from "react-router-dom"
export default function Navbar() {
  const Logo = './Logo.png'
    return (
      <div>
        <nav className="bg-neutral-800 top-0 h-[70px] flex lg:flex-row flex-col justify-between items-center px-8 ">
          <div>
          <div className="flex h-[60px]"><img src={Logo} className="rounded-lg" alt="Logo Principal" /></div>
          </div>
            <ul className="font-normal uppercase">
                <Link to="/" className="mr-4 text-white"> Inicio </Link>
                <Link to="/Products" className="mr-4 text-white"> Guitarras </Link>
                <Link to="/About" className="mr-4 text-white"> About </Link>
                <Link to="/Contact" className="mr-4 text-white"> Contacto </Link>
            </ul>
        </nav>
      </div>
    )
  }