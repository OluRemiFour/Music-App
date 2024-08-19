import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

export default function Profile({ navigation }) {
  function handleLogout() {
    Alert.alert("Are you sure you want to log out?", "", [
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => navigation.navigate("Home"),
      },
    ]);
  }

  return (
    <View
      style={{
        marginVertical: 40,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 125,
          marginBottom: 20,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-small-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Profile</Text>
      </View>

      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            padding: 5,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Image
            source={require("../assets/avatar.png")}
            style={{ width: 50, height: 50 }}
          />

          <View>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>John Doe</Text>
            <Text style={{ color: "gray" }}>Johndoe@gmail.com</Text>
          </View>
        </View>

        <View
          style={{
            borderColor: "#D3D3D3",
            borderRadius: 1,
            borderWidth: 1,
            marginTop: 20,
            marginBottom: 20,
            borderBottomWidth: 0,
          }}
        >
          <View
            style={{
              borderColor: "#D3D3D3",
            }}
          >
            <Text
              style={{
                color: "gray",
                paddingVertical: 20,
                paddingLeft: 20,
                fontSize: 15,
              }}
            >
              General
            </Text>
            <Text
              style={{
                paddingVertical: 5,
                paddingBottom: 20,
                paddingLeft: 20,
                fontSize: 15,
              }}
            >
              Edit Profile
            </Text>
            <Text
              style={{
                borderColor: "#D3D3D3",
                borderRadius: 1,
                borderWidth: 1,
                borderBottomWidth: 0,
                paddingVertical: 5,
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              Notifications
            </Text>
            <Text
              style={{
                borderColor: "#D3D3D3",
                borderRadius: 1,
                borderWidth: 1,
                borderBottomWidth: 0,
                paddingVertical: 5,
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 20,
              }}
            >
              Wishlist
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor: "#D3D3D3",
            borderRadius: 1,
            borderWidth: 1,
            marginTop: 10,
            // marginBottom: 10,
            borderBottomWidth: 0,
          }}
        >
          <View
            style={{
              borderColor: "#D3D3D3",
            }}
          >
            <Text
              style={{
                color: "gray",
                paddingVertical: 20,
                paddingLeft: 20,
                fontSize: 15,
              }}
            >
              Legal
            </Text>
            <Text
              style={{
                paddingVertical: 5,
                paddingBottom: 20,
                paddingLeft: 20,
                fontSize: 15,
              }}
            >
              Terms of Use
            </Text>
            <Text
              style={{
                borderColor: "#D3D3D3",
                borderRadius: 1,
                borderWidth: 1,
                paddingVertical: 5,
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              Privacy Policy
            </Text>
          </View>
          <View
            style={{
              borderColor: "#D3D3D3",
            }}
          >
            <Text
              style={{
                color: "gray",
                paddingVertical: 20,
                paddingLeft: 20,
                fontSize: 15,
              }}
            >
              Personal
            </Text>
            <Text
              style={{
                paddingVertical: 5,
                paddingBottom: 20,
                paddingLeft: 20,
                fontSize: 15,
              }}
            >
              Terms of Use
            </Text>
            <Text
              style={{
                borderColor: "#D3D3D3",
                borderRadius: 1,
                borderWidth: 1,
                borderBottomWidth: 0,
                paddingVertical: 5,
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              Report a Bug
            </Text>
            <Text
              // onPress={() => navigation.navigate("Home")}
              onPress={handleLogout}
              style={{
                borderColor: "#D3D3D3",
                borderRadius: 1,
                borderWidth: 1,
                borderBottomWidth: 0,
                paddingVertical: 5,
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              Logout
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
