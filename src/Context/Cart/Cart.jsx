import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
   
    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        
        if(isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) => {
                    return (
                        cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity+1}
                        :cartItem
                    )
                })
            )
        } else {
            setCartItems([...cartItems, { ...item, quantity:1}]);
        }
    };
    
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
    
        if(isItemInCart.quantity === 1){
            setCartItems(cartItems.filter((cartItems) => cartItems.id !== item.id));
            //filter method creates a new array with all elements 
            // that pass the test implemented by the provided function.
        } else {
            setCartItems(
                cartItems.map((cartItem) => {
                    return(
                        cartItem.id === item.id ? {...cartItem, quantity:cartItem.quantity-1}
                        : cartItem
                    )
                })
            );
            //map method creates a new array populated with the results of calling a
            //  provided function on every element in the calling array.
    
        }
    };

    const clearCart = () => {
        setCartItems([]);
        // set the cart items to an empty array
    }
    
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }   

    const placeOrder = () => {
            alert("Order Placed Successfully...!")
            clearCart()
    }
    
 
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        
     
      
        //reduce method executes a reducer function (that you provide) on
        //  each element of the array, resulting in a single output value.

      }, [cartItems]);
    
      //By using the setItem method of the localStorage API to set the cart items in the browser. 
      // The setItem method sets the value of the specified localStorage item.
    
    useEffect (() =>{
       const cartItems = localStorage.getItem("cartItems");
       if(cartItems) {
        setCartItems(JSON.parse(cartItems))
       } 
    },[])

    return (
        <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
            placeOrder,
          }}
        >
          {children}
        </CartContext.Provider>
      );
}
