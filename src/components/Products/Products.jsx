import { Link } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
export function ProductPage() {
    return(
        <div className="container mx-auto max-w-[1170px] ">
            <ItemList />
        </div>
    )
}