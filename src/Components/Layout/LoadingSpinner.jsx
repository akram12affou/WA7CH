import React from 'react'
import '../../styles/LoadingSpinner.scss'
function LoadingSpinner() {
  return (
    <div className='LoadingSpinner_container'>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    </div>
  )
}

export default LoadingSpinner