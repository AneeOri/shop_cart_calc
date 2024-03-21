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
        <div>
           <b> Cart</b>
           <b>Subtotal: ${total}</b>
           <div>
            {cart.length > 0 ?
              cart.map((prod) => (
                <div key={prod.title}>
                   <div>
                    <img src={prod.thumbnail} alt={prod.title}/>
                    <div>
                        <span>{prod.title}</span>
                        <b>$ {prod.price}</b>
                    </div>
                   </div>
                   <div>
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