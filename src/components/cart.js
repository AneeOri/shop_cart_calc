import { useEffect, useState } from "react";
import './cart.css';

const Cart = ({state, dispatch}) => {

    const {cart} = state;
    const [total, setTotal] = useState();

    useEffect(() =>{
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
    },[cart]);

    const changeQty = (id,qty) => dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
            id:id,
            qty:qty,
        },
    })


    return(
        <div className="mainContainer">
           <b className="bCart"> Cart</b>
           <b>Subtotal: ${total}</b>
           <div className="cartContainer">
            {cart.length > 0 ?
              cart.map((prod) => (
                <div key={prod.title} className="prodContainer">
                   <div className="imgContainer">
                    <img src={prod.thumbnail} alt={prod.title} className="img"/>
                    <div className="infContainer">
                        <span>{prod.title}</span>
                        <b>$ {prod.price}</b>
                    </div>
                   </div>
                   <div className="butonsContainer">
                    <button onClick={() => changeQty(prod.id, prod.qty -1)}>-</button>
                    <span>{prod.qty}</span>
                    <button onClick={() => changeQty(prod.id, prod.qty +1)}>+</button>
                   </div>
                </div>
              ))
            :
            <span>Cart is Empty</span>
            }
           </div>
        </div>
    );
}

export default Cart;