import React, { useState } from 'react'
import './listitem.css'

const ListItem = ({item}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card" >
    <div className="card-image" style={{width: "170px", position: "absolute", top: "-25px", left: "50px"}}>
      <img src={item.image} style={{width: "100%"}} alt="burgers" />
    </div>
    <div className="card-name" style={{color: "grey", position: "absolute", bottom: "32px", left: '70px',}}>
      {item.name}
    </div>
    <button className='card-btn'>{item.price}</button>
  </div>
  )
}

export default ListItem