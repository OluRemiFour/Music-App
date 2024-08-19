import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useContext, useMemo } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../constant/CartContext";
import { getReviews } from "../constant/data";

export default function ProductDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const [active, setActive] = React.useState("overview");
  const [cartCounter, setCartCounter] = React.useState(0);
  const { cartItems, addToCart } = useContext(CartContext);
  const { name, image, description, brand, price, id } = route.params || {};
  const item = route.params || {};
  const routeName = route.params;

  console.log(routeName);

  // function handleGoBack() {
  //   if (routeName.routeName === "Headphones") {
  //     navigation.navigate("Headphones");
  //   } else if (routeName.routeName === "Earpod") {
  //     navigation.navigate("Earpod");
  //   } else {
  //     navigation.goBack();
  //   }
  // }
  const handleGoBack = useCallback(() => {
    if (routeName.routeName === "Headphones") {
      navigation.navigate("Headphones");
    } else if (routeName.routeName === "Earpod") {
      navigation.navigate("Earpod");
    } else {
      navigation.goBack();
    }
  }, [navigation, routeName]);

  function handleCartItems(item) {
    setCartCounter((count) => count + 1);

    Alert.alert(
      "Item Added to Cart",
      "The item has been successfully added to your cart.",
      [{ text: "OK" }]
    );

    addToCart(item);
    console.log(cartItems);
  }

  // const reviews = getReviews();

  // function handlePress(button) {
  //   setActive(button);
  // }
  const reviews = useMemo(() => getReviews(), []);

  const handlePress = useCallback((button) => {
    setActive(button);
  }, []);

  return (
    <>
      <FlatList
        style={{ marginTop: 30, marginHorizontal: 30, flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={active === "overview" ? reviews : []}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginVertical: 20,
              }}
            >
              <TouchableOpacity onPress={handleGoBack}>
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
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#0acf83",
                    paddingBottom: 2,
                  }}
                >
                  USD350
                </Text>
                {routeName.routeName === "Headphones" && (
                  <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                    TMA-2 {"\n"} HD Wireless
                  </Text>
                )}
                {routeName.routeName === "Earpod" && (
                  <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                    EOS HD{"\n"}Earpod Canon
                  </Text>
                )}
              </View>
              <View
                style={{
                  marginVertical: 25,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // marginHorizontal: 15,
                }}
              >
                <Text
                  onPress={() => handlePress("overview")}
                  style={[
                    styles.button,
                    active === "overview" ? styles.active : null,
                  ]}
                >
                  Overview
                </Text>
                <Text
                  onPress={() => handlePress("features")}
                  style={[
                    styles.button,
                    active === "features" ? styles.active : null,
                  ]}
                >
                  Features
                </Text>
                <Text
                  onPress={() => handlePress("specifications")}
                  style={[
                    styles.button,
                    active === "specifications" ? styles.active : null,
                  ]}
                >
                  Specification
                </Text>
              </View>

              {routeName.routeName === "Headphones" &&
                active === "overview" && (
                  <View>
                    <View
                      style={{
                        marginTop: 10,
                        margin: "auto",
                        backgroundColor: "#e7e6e6",
                        paddingHorizontal: 60,
                        paddingVertical: 70,
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={require("../assets/product.png")}
                        style={{ width: 200, height: 200 }}
                      />
                    </View>

                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginLeft: 10,
                        marginTop: 35,
                      }}
                    >
                      Reviews ({reviews.length})
                    </Text>
                  </View>
                )}
              {routeName.routeName === "Earpod" && active === "overview" && (
                <View>
                  <View
                    style={{
                      marginTop: 10,
                      margin: "auto",
                      backgroundColor: "#e7e6e6",
                      paddingHorizontal: 60,
                      paddingVertical: 70,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      source={require("../assets/airpod.png")}
                      style={{ width: 200, height: 200 }}
                    />
                  </View>

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      marginLeft: 10,
                      marginTop: 35,
                    }}
                  >
                    Reviews ({reviews.length})
                  </Text>
                </View>
              )}

              {active === "features" && (
                <View style={{ marginTop: 20 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      // paddingLeft: 10,
                      paddingBottom: 20,
                    }}
                  >
                    Highly Detailed Audio
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "justify",
                      lineHeight: 20,
                      // paddingLeft: 5,
                    }}
                  >
                    The speaker unit contains a diaphragm that is
                    precision-grown from NAC Audio bio-cellulose, making it
                    stiffer, lighter and stronger than regular PET speaker
                    units, and allowing the sound-producing diaphragm to vibrate
                    without the levels of distortion found in other speakers.
                  </Text>
                  <Text>{"\n"}</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      lineHeight: 20,
                      textAlign: "justify",
                      // paddingLeft: 10,
                    }}
                  >
                    The speaker unit contains a diaphragm that is
                    precision-grown from NAC Audio bio-cellulose, making it
                    stiffer, lighter and stronger than regular PET speaker
                    units, and allowing the sound-producing diaphragm to vibrate
                    without the levels of distortion found in other speakers.
                  </Text>

                  <View
                    style={{
                      marginTop: 40,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/image8.png")}
                      style={{ width: 100, height: 100 }}
                    />

                    <View style={{ marginLeft: 15 }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        APTX HD WIRELESS AUDIO
                      </Text>
                      <Text
                        style={{ fontSize: 15, color: "#808080", width: "45%" }}
                      >
                        The Aptx® HD codec transmits 24-bit hi-res audio, equal
                        to or better than CD quality.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 40,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/image9.png")}
                      style={{ width: 100, height: 100 }}
                    />

                    <View style={{ marginLeft: 15 }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        ULTRA SOFT WITH {"\n"}ALCANTARA
                      </Text>
                      <Text
                        style={{ fontSize: 15, color: "#808080", width: "50%" }}
                      >
                        Alcantara® is a highly innovative material offering an
                        unrivalled combination of
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    // onPress={() => handleCartItems(item)}
                    onPress={() => handleCartItems(item)}
                    style={{
                      backgroundColor: "#0acf83",
                      color: "white",
                      paddingHorizontal: 20,
                      paddingVertical: 15,
                      borderRadius: 10,
                      marginTop: 50,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 18,
                        margin: "auto",
                      }}
                    >
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {active === "specifications" && (
                <View style={{ marginTop: 20 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      paddingLeft: 10,
                      paddingBottom: 20,
                    }}
                  >
                    Specifications
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "justify",
                      lineHeight: 20,
                      paddingLeft: 10,
                    }}
                  >
                    Detailed specifications of the product go here.
                  </Text>
                </View>
              )}
            </View>
          </>
        }
        renderItem={({ item }) => (
          <Review
            name={item.name}
            image={item.image}
            stars={item.stars}
            reviews={item.reviews}
            description={item.description}
            date={item.date}
          />
        )}
        ListFooterComponent={<View style={{ paddingBottom: 20 }} />}
      />
    </>
  );
}

function Review({ name, date, reviews, description, image }) {
  return (
    <View style={{ marginTop: 5 }}>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image source={image} style={{ width: 40, height: 40 }} />

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15, paddingLeft: 5 }}>
            {name}
          </Text>

          <Image
            source={reviews}
            style={{ width: 90, height: 15, paddingVertical: 10 }}
          />

          <Text style={{ paddingLeft: 6, paddingTop: 5, paddingRight: 50 }}>
            {description}
          </Text>
          <Text
            style={{
              fontSize: 13,
              paddingLeft: 6,
              paddingTop: 5,
              color: "gray",
            }}
          >
            {date}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 16,
  },

  active: {
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: "#0acf83",
    borderBottomStyle: "solid",
    fontWeight: "bold",
  },
});
