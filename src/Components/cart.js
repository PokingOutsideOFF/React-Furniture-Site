import React from 'react';
import { useEffect, useState } from 'react';

function Cart() {

    const [cart,setCart] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
        var id =1
        // add userid here using useContext in place of userId:${id}
        var response = await fetch(`http://localhost:5000/orders?userId=${id}`,{method:"GET"})
        var body = await response.json()
            setCart(body);
        };
        fetchData();
    }, []);

    let onIncrement=(product,max)=>{
        let allProducts = [...cart];
        let index = allProducts.indexOf(product);
        if(allProducts[index].quantity<max){
            allProducts[index].quantity++;
            setCart(allProducts)
        }
    }

    let onDecrement=(product,min)=>{
        let allProducts = [...cart];
        let index = allProducts.indexOf(product);
        if(allProducts[index].quantity>min){
            allProducts[index].quantity--;
            setCart(allProducts)

        }
    }

    let onDelete=(product)=>{
        let allProducts = [...cart];
        let index = allProducts.indexOf(product);
        if(window.confirm("sure?")){
            allProducts.splice(index,1);
        setCart(allProducts)
        }

    }


    return (
        <div>
        <div className="top">
      <img src="../assets/img/cart_img/top.png" alt="top" />
    </div>
    <div className="container">
  
      <section className="cart-section-outer">
        <div className="cart-section w-100">
          <div className="card p-5 w-100">
            <h2>Cart</h2>
            <span>Total items:</span>
            <hr className="cart" />
            <table className="table table-hover">
              <thead>
                <tr className="text-center">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
            
                    {cart.map((p)=>{
                        return(
                            <tr className="text-center">

                                <td>{p.productId}</td>
                                <td></td>
                                <td ><i className="fa-solid fa-circle-minus" onClick={()=>{onIncrement(p,10)}} style={{color:'#e6a400', border:'none', cursor: 'pointer'}}>+</i>{p.quantity} <i className="fa-solid fa-circle-plus" onClick={()=>{onDecrement(p,0)}} style={{color:'#e6a400', border:'none',cursor: 'pointer'}}>-</i></td>
                                <td>Please add price in orders Bhailog</td>
                                <td><button className="fa-solid fa-trash" onClick={()=>onDelete(p)} style={{cursor: 'pointer'}}>Delete</button></td>
                
                            </tr>
                        );
                    })}
              </tbody>
              
            </table>
            <div >
              <p style={{textAlign: 'center'}}>Cart is empty</p>
            </div>
          </div>

          {/* <div className="cart-total">
            <h3>Cart Totals</h3>
            <p className="Subtotal">
              Subtotal: <span className="total-amount">₹{total}</span>
            </p>
            <p className="Subtotal">
              Tax: <span className="total-amount">₹{0.15*total}</span>
            </p>
            <p style={{fontSize: '1.2em', fontWeight: 'bold'}}>
              Total: <span className="total-amount">₹{(total * 1.15).toFixed(2)}</span>
            </p>
            <button className="checkout-btn" href="checkout">
              <a href="checkout"> Check Out</a>
            </button>
          </div> */}
        </div>
      </section>

      <section>
       
        <div className="feature-wrapper">
          <div className="item">
            <img src="./assets/img/cart_img/trophy 1.png" alt="High Quality Icon" />
            <div>
              <h3>High Quality</h3>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="item">
            <img src="./assets/img/cart_img/guarantee.png" alt="Warranty Icon" />
            <div>
              <h3>Warranty Protection</h3>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="item">
            <img src="./assets/img/cart_img/shipping.png" alt="Free Shipping Icon" />
            <div>
              <h3>Free Shipping</h3>
              <p>Order over $150</p>
            </div>
          </div>
          <div className="item">
            <img src="./assets/img/cart_img/customer-support.png" alt="Support Icon" />
            <div>
              <h3>24 / 7 Support</h3>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    

        </div>
    );
}

export default Cart;