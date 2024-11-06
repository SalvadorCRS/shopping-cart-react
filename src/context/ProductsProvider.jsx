import { useEffect, useState } from 'react'
import { productContext } from './ProductContext'

export const ProductsProvider = ({children}) => {
    const [productos, setproductos] = useState([])

    const fetchProductos =  async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setproductos(data)
    }

    useEffect(() => {
        fetchProductos()

    }, [])

  return (
    <productContext.Provider value={{productos}}>
        {children}
    </productContext.Provider>
  )
}
