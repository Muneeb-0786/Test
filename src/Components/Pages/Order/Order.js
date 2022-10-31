import React, { useEffect, useState } from "react";
import "./order.css";
import burger2 from "../../../assets/Burgers/burger2.webp";
const Order = ({ open, onClose }) => {





    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);




    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }


  
  const modal = {
    position: "fixed",
    top: "0",
    right: "0%",
    height: "100vh",
    width: windowSize.innerWidth <= 900 ? "100%" : "70%",
    backgroundColor: "#fff",
    
    zIndex: "1000",
    transition: "all 0.4s",
    
  };
  const overlay = {
    position: "fixed",
    top: "0",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 1000,
  };

  const [quantity, setQuantity] = useState(0);
  const firstIncrement = () => setQuantity(quantity + 1);
  let firstDecrement = () => setQuantity(quantity - 1);

  if (quantity <= 0) {
    firstDecrement = () => setQuantity(0);
  }
const [productQuantity, setProductQuantity] = useState(0);
  const secondIncrement = () => setProductQuantity(productQuantity + 1);
  let secondDecrement = () => setProductQuantity(productQuantity - 1);

  if (productQuantity <= 0) {
    secondDecrement = () => setProductQuantity(0);
  }
  if (!open) return null;
  return (
    <div style={overlay}>
      <div style={modal}>
        <div className="order-details" style={{position: "relative", height:"100%"}}>
          <div
            className="orders-list-container"
            style={{ width: "100%", borderBottom: "1px solid grey" }}
          >
            <div
              className="order-list"
              style={{
                display: "grid",
                gridTemplateColumns: "10% 20% 40% 30%",
                gridTemplateRows: "150px",
              }}
            >
              <div className="remove-order" style={{ margin: "auto auto" }}>
                <i
                  className="fa-sharp fa-solid fa-circle-xmark"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
              <div className="product-image" style={{ width: "100%" }}>
                <img
                  src={burger2}
                  alt="burger"
                  style={{ width: "120px", marginTop: "12px" }}
                />
              </div>
              <div
                className="product-details"
                style={{
                  display: "flex ",
                  marginLeft: "5px",
                  textAlign: "left",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Zinger Stack
                </span>
                <span>Quantity: 3</span>
                <span>Total Price: $ 15.00</span>
              </div>
              <div
                className="change-order-quantity"
                style={{ margin: "auto auto" }}
              >
                <div className="labe" style={{ marginBottom: "10px" }}>
                  Change Quantity
                </div>
                <div className="buttons" style={{ color: "black" }}>
                  <i
                    className="fa-solid fa-circle-minus"
                    style={{ marginRight: "15px", fontSize: "18px" }}
                    onClick={firstDecrement}
                  />
                  {quantity}
                  <i
                    className="fa-solid fa-circle-plus"
                    onClick={firstIncrement}
                    style={{ marginLeft: "15px", fontSize: "18px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="orders-list-container"
            style={{ width: "100%", borderBottom: "1px solid grey" }}
          >
            <div
              className="order-list"
              style={{
                display: "grid",
                gridTemplateColumns: "10% 20% 40% 30%",
                gridTemplateRows: "150px",
              }}
            >
              <div className="remove-order" style={{ margin: "auto auto" }}>
                <i
                  className="fa-sharp fa-solid fa-circle-xmark"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
              <div className="product-image" style={{ width: "100%" }}>
                <img
                  src={burger2}
                  alt="burger"
                  style={{ width: "120px", marginTop: "12px" }}
                />
              </div>
              <div
                className="product-details"
                style={{
                  display: "flex ",
                  marginLeft: "5px",
                  textAlign: "left",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Zinger Stack
                </span>
                <span>Quantity: 3</span>
                <span>Total Price: $ 15.00</span>
              </div>
              <div
                className="change-order-quantity"
                style={{ margin: "auto auto" }}
              >
                <div className="labe" style={{ marginBottom: "10px" }}>
                  Change Quantity
                </div>
                <div className="buttons" style={{ color: "black" }}>
                  <i
                    className="fa-solid fa-circle-minus"
                    style={{ marginRight: "15px", fontSize: "18px" }}
                    onClick={secondDecrement}
                  />
                  {productQuantity}
                  <i
                    className="fa-solid fa-circle-plus"
                    onClick={secondIncrement}
                    style={{ marginLeft: "15px", fontSize: "18px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer" style={{color: "white", position: "absolute", bottom: "0", backgroundColor: "black", width: "100%", height: "130px"}}>
          <div className="footer-detail" style={{display: "grid", gridTemplateColumns: "33% 33% 33%", gridTemplateRows: "130px"}}>
            <div className="items-final-details" style={{margin: "auto auto", fontSize: "small", color: "grey"}}>
                <p>No. of items/Dishes: 2</p>
                <p style={{marginTop: "25px"}}>Tax included: $ 7.00 </p>
            </div>
            <div className="items-total-price" style={{margin: "auto auto"}}>
                <p style={{marginBottom:"18px", fontSize: "14px", color: "red"}}>Total Price</p>
                <h2>$23.00</h2>
            </div>
            <div className="place-order"  style={{margin: "auto auto"}}>
                <button className="order-place-btn" onClick={onClose}>Place Order</button>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Order;
