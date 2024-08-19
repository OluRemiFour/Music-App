// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Cart from "./Cart";
// import Profile from "./Profile";
// import MyStack from "./MyStack";

// export default function MyDrawer() {
//   const Drawer = createDrawerNavigator();
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Category">
//         <Drawer.Screen name="Cart" component={Cart} />
//         <Drawer.Screen name="Profile" component={Profile} />
//         <Drawer.Screen name="Category" component={MyStack} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Cart from "./Cart";
import Category from "./Category";
import Menu from "./Menu";
import Profile from "./Profile";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name !== "Cart" && route.name !== "Profile",
        header: () => <Menu />,
      })}
    >
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
