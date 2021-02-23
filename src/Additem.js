import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function Additem() {
    const[itemname , setitemname]=useState('')
    const[itemprice , setitemprice]=useState('')
    const[itemimage , setitemimage]=useState('')
    const dispatch = useDispatch()
    function additem()
    {
        var item = {
            itemName : itemname , 
            itemPrice : itemprice , 
            itemImage : itemimage
        }
        dispatch({type:'ADD_ITEM' , payload:item})
    }

    return (
        <div className='row mt-5 justify-content-center' style={{minHeight:'600px'}}>
            <div className="col-md-6">
            <input type="text" className='form-control' placeholder='Item Name'
            value={itemname} onChange={(e)=>{setitemname(e.target.value)}}
            />
            <input type="text" className='form-control' placeholder='Item Price'
            value={itemprice} onChange={(e)=>{setitemprice(e.target.value)}}
            />
            <input type="text" className='form-control' placeholder='Item Image'
            value={itemimage} onChange={(e)=>{setitemimage(e.target.value)}}
            />
            <button onClick={additem} className='btn btn-success'>ADD ITEM</button>
            </div>
        </div>
    )
}
