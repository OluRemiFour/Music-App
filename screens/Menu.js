import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Menu() {
  const navigation = useNavigation();

  function handleNavigation(children) {
    navigation.navigate(children);
  }
  return (
    <View
      style={{
        display: "flex",
        marginHorizontal: 30,
        marginVertical: 40,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require("../assets/menu.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome6 name="headphones-simple" size={25} color="#0acf83" />
        <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
          Audio
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleNavigation("Profile")}>
        <Image
          source={require("../assets/avatar.png")}
          style={{ width: 35, height: 35 }}
        />
      </TouchableOpacity>
    </View>
  );
}
