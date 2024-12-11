import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerTitleAlign: "center",
    });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneNo) {
      Alert.alert("Invalid Details", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (firstName && lastName && email && phoneNo) {
      navigation.navigate("Confirmation", {
        rooms: route.params.availableRooms,
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        name: route.params.name,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.params.startDate,
        endDate: route.params.endDate,
      });
    }
  };

  return (
    <>
      <View style={{ padding: 20 }}>
        <View style={{ gap: 10, flexDirection: "column" }}>
          <Text style={{ fontSize: 16, marginBottom: 3 }}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)} //It will change the text according to the user that enters the text.
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ gap: 10, flexDirection: "column", marginTop: 10 }}>
          <Text style={{ fontSize: 16, marginBottom: 3 }}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ gap: 10, flexDirection: "column", marginTop: 10 }}>
          <Text style={{ fontSize: 16, marginBottom: 3 }}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ gap: 10, flexDirection: "column", marginTop: 10 }}>
          <Text style={{ fontSize: 16, marginBottom: 3 }}>Phone No</Text>
          <TextInput
            value={phoneNo}
            onChangeText={(text) => setPhoneNo(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          alignItems: "center",
          marginTop: "auto",
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: 40,
          padding: 10,
          gap: 10,
        }}
      >
        <View>
          <View
            style={{
              marginTop: 3,
              marginLeft: 7,
              flexDirection: "row",
              alignItems: "center",
              //   marginHorizontal: 12,
              marginTop: 4,
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
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              ₹{route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text>
            You saved {route.params.oldPrice - route.params.newPrice} rupees.
          </Text>
        </View>
        <Pressable
          onPress={finalStep}
          style={{ backgroundColor: "#007FFF", padding: 10 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
