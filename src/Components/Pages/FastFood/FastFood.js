import React, { useState } from 'react'
import './FastFood.css'
import burger2 from '../../../assets/Burgers/burger2.webp'
import data from '../../../Data/data'
import ListItem from '../../listItem/ListItem'
const FastFood = () => {
    const [quantity, setQuantity] = useState(0)
    const increment = () => setQuantity(quantity + 1);
    let decrement = () => setQuantity(quantity - 1);

    if(quantity<=0) {
      decrement = () => setQuantity(0);
    }
 
  return (
    <>
    <div className="bg-clr" >
     
    <div  className="details" >
      <div className="image" style={{width: "90%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <img src={burger2}  style={{width:"90%", marginLeft: "-80px", marginTop: "-18px"}} alt="burger" />
        <p style={{color: "white", fontFamily: "cursive", marginLeft: "-40px", fontSize: "large", marginTop:"10px"}} >Zinger Stacker</p>
      </div>
      <div className="form-side">
      <div className="burger-detail" style={{color: "red", flex: "1", padding: "15px 0", borderBottom: "0.5px solid grey"}}>
      <h4 style={{ marginBottom: "10px"}}>Zack Burger</h4>
      <p style={{color: "white", fontSize: "small", lineHeight: "20px"}}>Marinated fillets with our signature spicy sauce,cheese and loaded with jalapenos, all of this in a new bun</p>
      </div>
      <div className="prices"  style={{color: "red",display: "flex", justifyContent: "space-between", padding: "20px 0", borderBottom: "0.5px solid grey"}}>
        <div className="label">
        <span >Price</span>
        <span style={{color: "white", fontSize: "10px"}}>&#40;inclusives of taxes&#41;</span>
        </div>
        <span  style={{color: "white"}}>$ 5.00</span>
      </div>
      <div className="quantity" style={{ color: "red",display: "flex", justifyContent: "space-between", padding: "20px 0", borderBottom: "0.5px solid grey" }}>
        <div className="label">
          <span >Quantity</span>
        </div>
        <div className="buttons"  style={{color: "white"}}>
        <i className="fa-solid fa-circle-plus" onClick={increment} style={{marginRight: "5px"}}/>{quantity}<i className="fa-solid fa-circle-minus" style={{marginLeft: "5px"}} onClick={decrement}/>
        </div>
      </div>
      <div className="total-price" style={{color: "red", display: "flex", justifyContent: "space-between", padding: "20px 0"}}>
        <span>Total Price</span>
        <span style={{color: "white"}}>$ 19.23</span>
      </div>
      </div>
    </div>
    <button className='add-to-order-btn' >Add to Order</button>
  </div>
    <div style={{display: "flex", gap: "10px"}}>

   <ListItem item={data[0]} />
   <ListItem item={data[1]}/>
   <ListItem item={data[2]}/>
    </div>
    </>
  )
}

export default FastFood