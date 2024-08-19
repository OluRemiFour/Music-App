import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Alert, View } from "react-native";
import { Paystack } from "react-native-paystack-webview";
import { CartContext } from "../constant/CartContext";

export default function PaymentScreen() {
  const { removeAllCartItems, total } = useContext(CartContext);
  const navigation = useNavigation();
  function handleBack() {
    navigation.navigate("Category");
  }
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_dcfa3d8202774206e8f20cc79886e77e10fc9862"
        amount={`${total * 10}`}
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          Alert.alert("Payment Failed", "Your payment failed", [
            {
              text: "OK",
              onPress: () => navigation.navigate("Category"),
            },
            navigation.goBack(),
          ]);
        }}
        onSuccess={(res) => {
          try {
            Alert.alert("Payment Successful", "Your payment was successful", [
              {
                text: "OK",
                onPress: () => {
                  removeAllCartItems();
                  handleBack();
                },
              },
            ]);
          } catch (error) {
            console.error("Payment success handler error:", error);
            Alert.alert(
              "Error",
              "An error occurred while processing your payment."
            );
          }
        }}
        autoStart={true}
      />
    </View>
  );
}
