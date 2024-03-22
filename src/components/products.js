import "./products.css";


const Products = ({state, dispatch}) => {

    const {products, cart} = state;

    return(
        <div className="mainContainer">
            {products.map((prod) => (
             <div className="prodContainer" key={prod.id}>
                <img className="img" src={prod.thumbnail} alt={prod.title}/>
                <div className="prods">
                   <span>{prod.title}</span>
                   <b>$ {prod.price}</b>
                </div> 
                {cart.some((p) => p.id === prod.id) ? (
                    <button
                     className="button"
                      onClick={() => dispatch ({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })}
                    >Remove From Cart
                    </button>
                   ) : (
                    <button
                     className="button"
                     onClick={() => dispatch({
                        type:"ADD_TO_CART",
                        payload:{
                            id:prod.id,
                            title: prod.title,
                            thumbnail: prod.thumbnail,
                            qty: prod.qty,
                            price: prod.price,
                        },
                     })}
                    >Add to Cart
                    </button>
                  )}
             </div>
            ))}
        </div>
    );
}

export default Products;