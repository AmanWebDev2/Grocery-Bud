import React from 'react'
import { FaTrashAlt,FaEdit } from 'react-icons/fa';

function List({items,removeItem,editItem}) {
  return (
    <div>
        {items.map((item)=>{
            return(
                <article key={item.id}>
                    <p className='title'>{item.title}</p>
                    <div className="btn-container">
                        <button className='btn btn-edit' onClick={()=>editItem(item.id)}><FaEdit/></button>
                        <button className='btn btn-delete' onClick={()=>removeItem(item.id)}><FaTrashAlt/></button>
                    </div>
                </article>
            ) 
        })}
    </div>

  )
}

export default List