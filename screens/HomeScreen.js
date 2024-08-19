import { AntDesign, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "./firebaseConfig";

export default function HomeScreen({}) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(name, value) {
    setData({ ...data, [name]: value });
    console.log(value);
  }
  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        navigation.navigate("Drawer");
        setData({ email: "", password: "" });
      })
      .catch((err) => {
        Alert.alert("Sign-In Error", err.message, [{ text: "OK" }]);
        console.log(err.message);
        setData({ email: "", password: "" });
      })
      .finally(() => {
        setIsLoading(false);
      });

    setData({ email: "", password: "" });
  }

  return (
    <View>
      <StatusBar style="light" />
      <View>
        <Image
          source={require("../assets/back.png")}
          style={{ width: "100%", height: "100%" }}
        />

        <View
          style={{
            position: "absolute",
            top: "4%",
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>
            Audio
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>
            It's modular and designed to last
          </Text>

          <View>
            <View style={{ marginTop: "60%", marginBottom: 15 }}>
              <TextInput
                style={{
                  backgroundColor: "white",
                  width: 320,
                  paddingVertical: 14,
                  paddingLeft: 45,
                  borderRadius: 5,
                }}
                placeholder="Email"
                name="email"
                // value={data.email}
                onChangeText={(value) => handleInputChange("email", value)}
              />
              <Fontisto
                name="email"
                size={24}
                color="gray"
                style={{ top: 15, position: "absolute", left: 10 }}
              />
            </View>

            <View>
              <TextInput
                style={{
                  backgroundColor: "white",
                  width: 320,
                  paddingVertical: 14,
                  paddingLeft: 45,
                  borderRadius: 5,
                }}
                placeholder="Password"
                secureTextEntry={true}
                name="password"
                // value={data.password}
                onChangeText={(value) => handleInputChange("password", value)}
              />
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={{ top: 15, position: "absolute", left: 10 }}
              />
            </View>
          </View>

          <Text
            style={{
              color: "white",
              marginTop: 20,
              fontWeight: "semibold",
              fontSize: 16,
            }}
          >
            Forgot Password
          </Text>

          <TouchableOpacity onPress={handleSignIn}>
            <Text
              style={{
                color: "white",
                marginTop: 20,
                fontWeight: "semibold",
                fontSize: 16,
                padding: 15,
                width: 320,
                textAlign: "center",
                borderRadius: 5,
                borderColor: "white",
                backgroundColor: "#0acf83",
                marginTop: 20,
              }}
            >
              {!isLoading ? (
                "Sign in"
              ) : (
                <Image
                  source={require("../assets/spinner.gif")}
                  style={{ width: 25, height: 25, marginBottom: 10 }}
                />
              )}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 5,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "semibold",
                fontSize: 16,
                borderColor: "white",
              }}
            >
              Didn’t have any account?
            </Text>

            <Text
              onPress={() => navigation.navigate("Signup")}
              style={{
                color: "#0acf83",
                fontWeight: "semibold",
                fontSize: 16,
                textDecorationLine: "underline",
              }}
            >
              Sign Up here
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
