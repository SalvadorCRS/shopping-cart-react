import { useContext} from "react"
import { Card } from '../components/Card'
import { productContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"
export const ShopPage = () => {

    const { productos } = useContext(productContext)

    const {purchaselist,addpurchase,moreamount,lessamount,deletepurchase} = useContext(CartContext)

    const handleAdd = (purchase) => {
        addpurchase(purchase)
    }
    const handleDelete = (id) => {
      deletepurchase(id)
    }
 

  return (
    <>
        <h1>purchases</h1>
        <hr />

        {productos.map(producto => (
            <Card 
            key={producto.id} 
            image={producto.image} 
            title={producto.title} 
            description={producto.description} 
            price={producto.price}
            handleAdd={() => handleAdd(producto)}
            handleDelete={() => handleDelete(producto.id)}>
                

            </Card>  
        ))}

    </>
  )
}
