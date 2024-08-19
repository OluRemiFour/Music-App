import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../constant/CartContext";
import { getHeadphones } from "../constant/data";

export default function Headphones() {
  const headphone = getHeadphones();
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext);

  function handleProductNavigation(item) {
    navigation.navigate("ProductDetails", { product: item });
  }

  return (
    <View style={{ marginVertical: 30, marginHorizontal: 30, flex: 1 }}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginVertical: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <AntDesign name="shoppingcart" size={26} color="black" />
          <Text
            style={{
              position: "absolute",
              left: -2,
              top: -10,
              backgroundColor: "brown",
              color: "white",
              fontWeight: "bold",
              paddingHorizontal: 5,
              borderRadius: 100,
            }}
          >
            {cartItems.length > 0 ? cartItems.length : 0}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: "semibold" }}>Headphones</Text>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>TMA Wireless</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
          gap: 7,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
            borderRadius: 10,
            borderBlockColor: "black",
            borderWidth: 1,
            padding: 8,
          }}
        >
          <View>
            <MaterialIcons
              name="settings-input-component"
              size={20}
              color="black"
            />
          </View>
          <Text>Filter</Text>
        </View>

        <Text style={{ padding: 8 }}>Popularity</Text>
        <Text style={{ padding: 8 }}>Newest</Text>
        <Text style={{ padding: 8 }}>Most Expensive</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={headphone}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            price={item.price}
            image={item.image}
            reviews={item.reviews}
            description={item.description}
            brand={item.brand}
            quantity={item.quantity}
            id={item.id}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

export function Item({
  name,
  image,
  reviews,
  description,
  brand,
  price,
  quantity,
  id,
}) {
  const navigation = useNavigation();
  const route = useRoute();
  const routeName = route.name;
  const handleNavigate = (item) => {
    navigation.navigate("ProductDetails", {
      // item,
      name,
      image,
      description,
      brand,
      price,
      quantity,
      id,
      routeName,
    });
  };

  return (
    <ScrollView style={{ marginTop: 35 }}>
      <TouchableOpacity
        onPress={handleNavigate}
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            display: "flex",
            backgroundColor: "#e7e6e6",
            padding: 10,
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ padding: 10 }}>
            <Image source={image} style={{ width: 110, height: 110 }} />
          </View>

          <View style={{ paddingTop: 15, paddingBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{brand}</Text>
            <Text style={{ fontSize: 15, color: "gray" }}>{price} $</Text>
            <Text
              style={{
                fontSize: 15,
                color: "gray",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <FontAwesome name="star" size={15} color="black" /> {reviews}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
  },
});
