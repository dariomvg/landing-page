import React from 'react'
import "../estilos/Planes.css"

const Plan = ({children}) => {
  return (
    <div>
        <div className='container'>
            {children}
        </div>
    </div>
  )
}

export default Plan