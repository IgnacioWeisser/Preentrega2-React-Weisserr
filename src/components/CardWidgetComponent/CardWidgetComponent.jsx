import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'




const CardWidgetComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartPlus} style={{color: "white", fontSize: "1.7rem"}}  />
            <span  style={{color: "white", fontSize: "1.7rem", margin: "0.5rem"}} >0</span>
        </div>
    )
}

export default CardWidgetComponent