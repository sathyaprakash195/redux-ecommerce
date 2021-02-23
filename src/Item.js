import React from 'react'
import { useDispatch } from 'react-redux'
export default function Item({item}) {
    const dispatch = useDispatch()
    return (
        <div className='shadow p-3 mb-5 bg-white rounded'>
            <h1>{item.itemName}</h1>
            <img src={item.itemImage} className='img-fluid'/>
            <h1>{item.itemPrice} /-</h1>
            <button className='btn btn-primary' 
            onClick={()=>{dispatch({type:'ADD_ITEM_TO_CART' , payload : item})}}
            >ADD TO CART</button>
        </div>
    )
}
