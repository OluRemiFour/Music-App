import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { getEarPod, getHeadphones } from "../constant/data";
import { CartContext } from "../constant/CartContext";

export default function Category() {
  // const {setCartItems} = React.useContext(CartContext)
  const navigation = useNavigation();

  function handleNavigation() {
    setInputValue("");
    setFilteredItems([]);
  }

  function handleProductNavigation(item) {
    navigation.navigate("ProductDetails", { product: item });
  }

  const [inputValue, setInputValue] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState([]);

  function handleSearchItem(value) {
    setInputValue(value);
    if (value.length === 0) {
      setFilteredItems([]);
    } else {
      const merge = getHeadphones().concat(getEarPod());
      const searchItem = merge.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(searchItem);
    }
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="dark" />

        <View style={{ marginHorizontal: 30 }}>
          {filteredItems.length === 0 && (
            <View>
              <Text style={{ fontSize: 15 }}>Hi, Andrea</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  marginVertical: 10,
                }}
              >
                What are you looking for today?
              </Text>
            </View>
          )}

          <View>
            <TextInput
              style={{
                paddingVertical: 15,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#ccc",
                marginVertical: 10,
                paddingHorizontal: 40,
              }}
              value={inputValue}
              onChangeText={handleSearchItem}
              placeholder="Search headphone"
            />
            <View style={{ position: "absolute", top: 28, left: 5 }}>
              <EvilIcons name="search" size={30} color="#ccc" />
            </View>
          </View>

          {filteredItems.length > 0 && (
            <SearchProduct
              filteredItems={filteredItems}
              handleProductNavigation={handleProductNavigation}
            />
          )}
        </View>

        {filteredItems.length === 0 && <CategoryProduct />}
      </ScrollView>
    </>
  );
}

function CategoryProduct() {
  const [active, setActive] = React.useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={{
        backgroundColor: "#e7e6e6",
        marginVertical: 20,
        height: "100%",
        borderRadius: 30,
        paddingBottom: 40,
      }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            marginTop: 20,
            marginHorizontal: 30,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#0acf83",
              paddingVertical: 6,
              paddingHorizontal: 10,
              borderRadius: 100,
            }}
          >
            <Text style={{ color: "white" }}> Headphone</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#0acf83",
              paddingVertical: 6,
              paddingHorizontal: 10,
              borderRadius: 100,
            }}
          >
            <Text style={{ color: "white" }}> Earpads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive((active) => !active)}
            style={[
              styles.commonStyle,
              active ? styles.activeStyle : styles.commonStyle,
            ]}
          >
            <Text
              style={[
                styles.inactiveColor,
                active ? styles.activeColor : styles.inactiveColor,
              ]}
            >
              Headband
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#0acf83",
              paddingVertical: 6,
              paddingHorizontal: 10,
              borderRadius: 100,
            }}
          >
            <Text style={{ color: "white" }}> Earpads</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          style={{
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              marginVertical: 30,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                paddingVertical: 20,
                paddingHorizontal: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <View style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                  TMA-2 {"\n"} Modular {"\n"} Headphone
                </Text>
                <Text
                  onPress={() => navigation.navigate("Headphones", {})}
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    fontWeight: "900",
                    color: "#0acf83",
                    fontSize: 18,
                    padding: 5,
                  }}
                >
                  Shop now &rarr;
                </Text>
              </View>

              <View>
                <Image
                  source={require("../assets/product.png")}
                  style={{ width: 110, height: 110 }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              marginVertical: 30,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                paddingVertical: 20,
                paddingHorizontal: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 5,
              }}
            >
              <View style={{ paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                  TMA-2 {"\n"} HD Canon {"\n"} Earpod
                </Text>
                <Text
                  onPress={() => navigation.navigate("Earpod")}
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    fontWeight: "900",
                    color: "#0acf83",
                    fontSize: 18,
                    padding: 6,
                  }}
                >
                  Shop now &rarr;
                </Text>
              </View>

              <View>
                <Image
                  source={require("../assets/airpod.png")}
                  style={{ width: 110, height: 110 }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <ScrollView
        style={{
          marginHorizontal: 30,
          // marginBottom: 30,
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Featured Products
          </Text>
          <Text style={{ color: "gray" }}>See All</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Headphones")}

                // onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  source={require("../assets/product.png")}
                  style={{
                    width: 70,
                    height: 70,
                    alignContent: "center",
                    marginHorizontal: "auto",
                    marginVertical: 10,
                    padding: 50,
                  }}
                />
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingHorizontal: 10,
                    paddingTop: 30,
                  }}
                >
                  TMA-2 HD Wireless{"\n"}USD 350
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20,
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Earpod")}>
                <Image
                  source={require("../assets/airpod.png")}
                  style={{
                    width: 70,
                    height: 70,
                    alignContent: "center",
                    marginHorizontal: "auto",
                    marginVertical: 10,
                    padding: 50,
                  }}
                />
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingHorizontal: 10,
                    paddingTop: 30,
                  }}
                >
                  Canon EOS HD pod{"\n"}USD 1500D
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

function SearchProduct({ filteredItems, handleProductNavigation }) {
  return (
    <View>
      <Text style={{ fontSize: 20, marginVertical: 20 }}>Popular product</Text>

      <View>
        {filteredItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              marginBottom: 10,
              backgroundColor: "white",
              paddingHorizontal: 20,
              paddingVertical: 40,
              borderRadius: 10,
              gap: 20,
            }}
            onPress={() => handleProductNavigation(item)}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={item.image}
                style={{ width: 70, height: 70, marginHorizontal: 10 }}
              />
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {item.name}
                </Text>
                <Text style={{ fontWeight: "bold" }}> {item.brand}</Text>
                <Text
                  style={{
                    maxWidth: "95%",
                    paddingVertical: 5,
                    paddingLeft: 4,
                    color: "gray",
                  }}
                >
                  {item.description}
                </Text>
                <Text style={{ color: "gray", paddingLeft: 5 }}>
                  N{item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  commonStyle: {
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  activeStyle: {
    backgroundColor: "#0acf83",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  activeColor: {
    color: "white",
  },
  inactiveColor: {
    color: "#000",
  },
});
