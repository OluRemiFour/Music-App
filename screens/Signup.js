import { AntDesign, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "./firebaseConfig";

export default function Signup() {
  const navigation = useNavigation();
  const [data, setData] = React.useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(name, value) {
    setData({ ...data, [name]: value });
    console.log(value);
  }

  function handleSignUp() {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((data) => {
        if (data) {
          Alert.alert(
            "User created successfully",
            "Please login to continue.",
            [{ text: "OK" }]
          );
        }
        setData({ email: "", password: "" });
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <View>
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
                  name="password"
                  placeholder="Password"
                  secureTextEntry={true}
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

            <TouchableOpacity onPress={handleSignUp}>
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
                  "Sign up"
                ) : (
                  <Image
                    source={require("../assets/spinner.gif")}
                    style={{ width: 25, height: 25, marginBottom: 5 }}
                  />
                )}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                marginTop: 60,
                display: "flex",
                flexDirection: "row",
                marginVertical: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 10,
                  marginHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/apple.png")}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 10,
                  marginHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/facebook.png")}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 10,
                  marginHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/google.png")}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 5,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  // marginTop: 20,
                  fontWeight: "semibold",
                  fontSize: 16,
                  borderColor: "white",
                }}
              >
                If you have an account?
              </Text>
              <Text
                onPress={() => navigation.navigate("Home")}
                style={{
                  color: "#0acf83",
                  fontWeight: "semibold",
                  fontSize: 16,
                  textDecorationLine: "underline",
                }}
              >
                Sign In here
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
