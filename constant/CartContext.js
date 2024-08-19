// import React from "react";

// const CartContext = React.createContext();

// function CartProvider({ children }) {
//   const [cartItems, setCartItems] = React.useState([]);

//   const [itemIncrease, setItemIncrease] = React.useState(1);

//   const total = cartItems.reduce((total, item) => total + item.price, 0);
//   // console.log(total);
//   const grandTotal = total + total * itemIncrease;
//   console.log(grandTotal);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const handleIncrease = (item) => {
//     setItemIncrease(itemIncrease + 1);
//     console.log(itemIncrease);
//   };
//   const handleDecrease = (item) => {
//     if (itemIncrease > 1) {
//       setItemIncrease(itemIncrease - 1);
//       console.log(itemIncrease);
//     }
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCartItems);
//   };

//   const removeAllCartItems = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         removeAllCartItems,
//         handleIncrease,
//         handleDecrease,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export { CartContext, CartProvider };

// import React from "react";
// const CartContext = React.createContext();

// function CartProvider({ children }) {
//   const [cartItems, setCartItems] = React.useState([]);
//   const [quantities, setQuantities] = React.useState({});

//   // Update quantities when a new item is added
//   const addToCart = (item) => {
//     if (cartItems.some((i) => i.id === item.id)) return;
//     setCartItems((prevItems) => [...prevItems, item]);

//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [item.id]: prevQuantities[item.id] ? prevQuantities[item.id] : 1,
//     }));
//   };

//   const handleIncrease = (item) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [item.id]: prevQuantities[item.id] + 1,
//     }));
//   };

//   const handleDecrease = (item) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [item.id]: prevQuantities[item.id] > 1 ? prevQuantities[item.id] - 1 : 1,
//     }));
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCartItems);

//     // Also remove the item from quantities state
//     setQuantities((prevQuantities) => {
//       const { [itemId]: _, ...newQuantities } = prevQuantities;
//       return newQuantities;
//     });
//   };

//   const removeAllCartItems = () => {
//     setCartItems([]);
//     setQuantities({});
//   };

//   const total = cartItems.reduce(
//     (total, item) => total + item.price * (quantities[item.id] || 3),
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         removeAllCartItems,
//         handleIncrease,
//         handleDecrease,
//         total,
//         quantities,
//         setQuantities,
//         setCartItems,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export { CartContext, CartProvider };

import React, { useMemo, useState } from "react";
const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const addToCart = (item) => {
    if (cartItems.some((i) => i.id === item.id)) return;
    setCartItems((prevItems) => [...prevItems, item]);

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: prevQuantities[item.id] ? prevQuantities[item.id] : 1,
    }));
  };

  const handleIncrease = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: prevQuantities[item.id] + 1,
    }));
  };

  const handleDecrease = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: prevQuantities[item.id] > 1 ? prevQuantities[item.id] - 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);

    setQuantities((prevQuantities) => {
      const { [itemId]: _, ...newQuantities } = prevQuantities;
      return newQuantities;
    });
  };

  const removeAllCartItems = () => {
    setCartItems([]);
    setQuantities({});
  };

  // Memoize the total calculation
  const total = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * (quantities[item.id] || 1),
      0
    );
  }, [cartItems, quantities]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeAllCartItems,
        handleIncrease,
        handleDecrease,
        total,
        quantities,
        setQuantities,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
