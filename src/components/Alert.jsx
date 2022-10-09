import React, { useEffect } from 'react'

function Alert({type,msg,removeAlert,list}) {
    
    useEffect(() => {
        const id = setTimeout(()=>{
            removeAlert();
        },3000);
    return ()=>clearTimeout(id);
    }, [list]);
    
  return (
    <p className={`alert alert-${type}`}>{ msg}</p>
  )
}

export default Alert