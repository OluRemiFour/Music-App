// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import Category from "./Category";
// import Earpod from "./EarPod";
// import Headphones from "./Headphones";
// import HomeScreen from "./HomeScreen";
// import Signup from "./Signup";

// export default function MyStack() {
//   const Stack = createStackNavigator();

//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Signup" component={Signup} />
//       <Stack.Screen name="Category" component={Category} />
//       <Stack.Screen name="Headphones" component={Headphones} />
//       <Stack.Screen name="Earpod" component={Earpod} />
//     </Stack.Navigator>
//   );
// }

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./HomeScreen";
import Signup from "./Signup";
// import Category from "./Category";
import Earpod from "./EarPod";
import Headphones from "./Headphones";
import MyDrawer from "./MyDrawer";
import PaymentScreen from "./PaymentScreen";
import ProductDetails from "./ProductDetails";
import SignIn from "./SignIn";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Headphones" component={Headphones} />
      <Stack.Screen name="Earpod" component={Earpod} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
