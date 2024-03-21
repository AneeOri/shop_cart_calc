import { useEffect, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";
import axios from "axios";



function App(){
    
  const [state, dispatch] = useReducer(cartReducer, {
    products:[],
    cart:[],
  });

  const fetchProducts = async() => {
    const {data} = await axios.get("https://dummyjson.com/products")

    dispatch({
      type: 'ADD_PRODUCTS',
      payload:data.products,
    });
  };

  useEffect(() => {
     fetchProducts()
  },[]);
}

export default App;
