import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { CartContext } from "../constant/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    removeAllCartItems,
    handleIncrease,
    handleDecrease,
    quantities,
    total,
  } = useContext(CartContext);
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.goBack();
  }

  function handleRemoveAllItem() {
    // if (total > 0) {
    Alert.alert("Remove Item", "Are you sure you want to remove all items?", [
      {
        text: "Yes",
        onPress: () => removeAllCartItems(),
      },
      {
        text: "No",
        onPress: () => {},
        style: "cancel",
      },
    ]);
    // }
  }

  const handlePayment = () => {
    navigation.navigate("PaymentScreen");
  };

  return (
    <View style={{ marginLeft: 10, marginRight: 20, marginVertical: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleNavigation}>
          <Entypo name="chevron-small-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Shopping Cart</Text>
        <TouchableOpacity onPress={handleRemoveAllItem}>
          <AntDesign name="delete" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {cartItems?.length > 0 ? (
        cartItems?.map((item, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              key={index}
              style={{
                marginVertical: 20,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginHorizontal: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#e7e6e6",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Image source={item?.image} style={{ width: 60, height: 60 }} />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {item?.name}
                </Text>
                <Text style={{ fontSize: 14 }}>Price: N{item?.price}</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  <TouchableOpacity onPress={() => handleIncrease(item)}>
                    <Text
                      style={{
                        paddingHorizontal: 5,
                        borderWidth: 1,
                        borderRadius: 5,
                        marginVertical: 10,
                        fontSize: 18,
                      }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                  {/* <Text>{quantities}</Text> */}
                  <Text>{quantities[item.id]}</Text>

                  <TouchableOpacity onPress={() => handleDecrease(item)}>
                    <Text
                      style={{
                        paddingHorizontal: 5,
                        borderWidth: 1,
                        borderRadius: 5,
                        marginVertical: 10,
                        fontSize: 18,
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <AntDesign name="delete" size={14} color="black" />
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>No items in cart</Text>
      )}

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Total: {cartItems.length} Items</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>N{total}</Text>
        </View>

        <TouchableOpacity
          onPress={handlePayment}
          style={{
            backgroundColor: "#0acf83",
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Checkout
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNavigation}
          style={{
            backgroundColor: "#ff6722",
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// export default function Cart({}) {
//   const { cartItems, removeFromCart } = useContext(CartContext);
//   console.log(cartItems);
//   const navigation = useNavigation();

//   function handleNavigation() {
//     navigation.navigate("ProductDetails");
//   }

//   return (
//     <View style={{ marginLeft: 10, marginRight: 20, marginVertical: 50 }}>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <TouchableOpacity onPress={handleNavigation}>
//           <Entypo name="chevron-small-left" size={30} color="black" />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 20, fontWeight: "bold" }}>Shopping Cart</Text>
//         <AntDesign name="delete" size={20} color="black" />
//       </View>

//       {cartItems?.length > 0 ? (
//         cartItems?.map((item, index) => (
//           <View
//             key={index}
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <View
//               key={index}
//               style={{
//                 marginVertical: 20,
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               <View
//                 style={{
//                   backgroundColor: "#e7e6e6",
//                   padding: 10,
//                   borderRadius: 10,
//                 }}
//               >
//                 <Image source={item?.image} style={{ width: 50, height: 50 }} />
//               </View>
//               <View style={{ marginLeft: 10 }}>
//                 <Text style={{ fontWeight: "bold", fontSize: 16 }}>
//                   {item?.name}
//                 </Text>
//                 <Text style={{ fontSize: 14 }}>Price: ${item?.price}</Text>
//                 <Text style={{ fontSize: 14 }}>Quantity: {item?.quantity}</Text>
//               </View>
//             </View>

//             <TouchableOpacity onPress={() => removeFromCart(item.id)}>
//               <AntDesign name="delete" size={14} color="black" />
//             </TouchableOpacity>
//           </View>
//         ))
//       ) : (
//         <Text>No items in cart</Text>
//       )}

//       <View style={{ marginTop: 20 }}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           <Text>Total: {cartItems?.length} Items</Text>
//           <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//             USD
//             {cartItems?.reduce(
//               (total, item) => total + item?.price * item?.quantity,
//               0
//             )}
//           </Text>
//         </View>

//         <TouchableOpacity
//           style={{
//             backgroundColor: "#0acf83",
//             paddingHorizontal: 20,
//             paddingVertical: 15,
//             borderRadius: 10,
//             marginTop: 20,
//           }}
//         >
//           <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
//             Checkout
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleNavigation}
//           style={{
//             backgroundColor: "#ff6722",
//             paddingHorizontal: 20,
//             paddingVertical: 15,
//             borderRadius: 10,
//             marginTop: 10,
//           }}
//         >
//           <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
//             Continue Shopping
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
