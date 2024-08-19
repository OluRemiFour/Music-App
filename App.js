import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { CartProvider } from "../MyNewProject/constant/CartContext";
import { ProductProvider } from "./constant/ProductContext";
import MyStack from "./screens/MyStack";

export default function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <StatusBar style="auto" />
            <MyStack />
          </NavigationContainer>
        </SafeAreaView>
      </ProductProvider>
    </CartProvider>
  );
}
