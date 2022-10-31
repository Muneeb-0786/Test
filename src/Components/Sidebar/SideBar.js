import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Order from '../Pages/Order/Order';
import menuItem from './menuItem'

// import FaBars from 'react-icons'
import './sidebar.css'


const SideBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = ()=> setIsOpen(!isOpen);

    const activeLink = {
      display: "flex",
    padding: "0 20px",
    gap: "5px",
    height: '60px',
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
    borderTop: "0.5px solid #f3f3f3",
    width: "200px",
    background: "rgb(0, 0, 0, 0.9)",
    color: "white",
    transition: "all 0.2s",
    cursor: "pointer"
      
    } 

    const normalLink = {
      display: "flex",
      padding: "0 20px",
      gap: "5px",
      height: '60px',
      justifyContent: "space-between",
      alignItems: "center",
      textDecoration: "none",
      color: "#3a3a3a",
      borderTop: "0.5px solid #f3f3f3",
      width: "200px",
      transition: "all 0.5s"
    }

    const [open, setOpen] = useState(false)

  return (
    <div className="container" style={{ margin: "0", padding: "0" }}>
    
        <div
          style={{ width: isOpen ? "350px" : "100px" }}
          className="sidebar"
        >
         <div className='menu-nav'> <i className="fa-solid fa-bars" style={{marginLeft: '-10px'}} onClick={toggle}/> <span style={{color: "grey", fontSize: "30px"}} >Menu</span>  </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
             style={({isActive})=> isActive ? activeLink : normalLink}
              
            >
              <div
                className="img"
                style={{ display: "block"  }}
              >
                {item.img}
              </div>
              <div
                style={{ display: "block" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
           <div className="orders" 
           style={{display: isOpen ? "block" : "none"}} >
            <div className="price">
              <h2 style={{color: "red"}}>$ 23.00</h2>
              <p style={{fontSize: "small", marginTop:"10px"}}>Total Amount</p>
            </div>
            <div>
              
              <button className='order-btn' onClick={() => setOpen(!open)}>
                Orders
              </button>
              <Order
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          />
            </div>
           </div>
        </div>
        
        <main>{children}</main>
      </div>
  )
}

export default SideBar