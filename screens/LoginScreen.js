import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  //   console.log(userCredentials.user.stsTokenManager.accessToken);
  //   AsyncStorage.setItem(
  //     "tokenUser",
  //     userCredentials.user.stsTokenManager.accessToken
  //   );

  //   useEffect(() => {
  //     const getMyObject = async () => {
  //       try {
  //         const jsonValue = await AsyncStorage.getItem("tokenUser");
  //         console.log("jsonValue");
  //         if (jsonValue) {
  //           navigation.replace("Main");
  //         }
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //     getMyObject();
  //   }, [token]);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential.user;
      console.log("user details", user);
    });
  };

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        // if(!authUser) {

        // }
        if (authUser) {
          navigation.navigate("Main");
        }
      });

      return unsubscribe;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontWeight: "bold", fontSize: 18 }}>
            Sign In
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 17, marginTop: 15 }}>
            Sign in to your Account.
          </Text>
        </View>

        <View>
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontWeight: "500", fontSize: 18 }}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email id"
              placeholderTextColor={"gray"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>

        <View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "500", fontSize: 18 }}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="enter your password"
              placeholderTextColor={"gray"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>
        <Pressable onPress={login}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{
            borderRadius: 7,
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: 16,
              color: "gray",
            }}
          >
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
