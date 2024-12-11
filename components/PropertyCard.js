import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            property: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            availableRooms: property.rooms,
            adults: adults,
            children: children,
            rooms: rooms,
            selectedDates: selectedDates,
          })
        }
        style={{
          margin: 15,
          flexDirection: "row",
          marginLeft: 7,
          backgroundColor: "white",
        }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 2,
              marginLeft: 7,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <AntDesign name="hearto" size={22} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginLeft: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                padding: 4,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 15,
                }}
              >
                Genius Level
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: 250,
              marginTop: 6,
              color: "gray",
              fontWeight: "bold",
              padding: 5,
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          <Text
            style={{
              width: 210,
              marginTop: 3,
              marginLeft: 7,
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            Price for 1 Night & {adults} Adults
          </Text>
          <View
            style={{
              marginTop: 3,
              marginLeft: 7,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              ₹{property.oldPrice * adults}
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              ₹{property.newPrice * adults}
            </Text>
          </View>
          <View style={{ marginTop: 6, marginLeft: 7 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel Room : 1 Bed{" "}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#6082B6",
              padding: 4,
              marginTop: 4,
              marginLeft: 7,
              borderRadius: 5,
              width: 115,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Limited Time Deal
            </Text>
          </View>
        </View>

        {/*  </View> */}
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
