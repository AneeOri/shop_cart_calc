import { useEffect, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";
import axios from "axios";
import Products from "./components/products";
import Cart from "./components/cart";
import './App.css';

function App(){
    
  const [state, dispatch] = useReducer(cartReducer, {
    products:[],
    cart:[],
  });

  useEffect(() => {

    const fetchProducts = async() => {
      const {data} = await axios.get("https://dummyjson.com/products");
     
      dispatch({
        type: 'ADD_PRODUCTS',
        payload:data.products,
      });
      
    };

    fetchProducts();

  },[]);

  return(
     <div className="mainContainer">
       <Products state={state} dispatch={dispatch}/>
       <Cart state={state} dispatch={dispatch}/>
     </div>
  );
}

export default App;
