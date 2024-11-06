import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartPage = () => {

    const {purchaselist,moreamount,lessamount,deletepurchase} = useContext(CartContext)

    const calculateTotal = () => {
        return purchaselist.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
    }

    const handlePrint = () => {

        print()
    }

  return (
    <>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Amount</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>

    {
    purchaselist.map(item => (
        <tr key={item.id}>
        <th>{item.title}</th>
        <td>{item.price}</td>
        <td>
            <button className='btn btn-ouline-primary' onClick={() => lessamount(item.id)}>-</button>
            <button className='btn btn-primary'>{item.amount}</button>
            <button className='btn btn-ouline-primary' onClick={() => moreamount(item.id)}>+</button>
        </td>
        <td> 
            <button
            type='button'
            className='btn btn-danger'
            onClick={() => deletepurchase(item.id)}>
            Delete</button></td>
      </tr>
    ))
    }
   
   <tr>
   <th><b>TOTAL:</b></th>
    <td></td>
    <td></td>
    <td>${calculateTotal()}</td>
   </tr>


  </tbody>
</table>
    <div className='d-grid gap-2'>
        <button className='btn btn-primary' onClick={handlePrint} disabled={purchaselist<1}>Buy</button>
    </div>
    </>
  )
}
