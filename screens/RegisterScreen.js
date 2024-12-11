import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const register = () => {
    if(email === "" || password === "" || phone === "") {
        Alert.alert("Invalid Details", "Please enter all the details", [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    }
    createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
        const user = userCredentials._tokenResponse.email;
        const uid = auth.currentUser.uid;

        // Example using a regular expression for basic email validation
// const isValidEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };


        // doc method is used for database
        setDoc(doc(db,"user",`${uid}`), {
            email:user,
            phone:phone
        })
    })
  }

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
            Register
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 17, marginTop: 15 }}>
            Create an Account
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

        
        <View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "500", fontSize: 18 }}>Phone No</Text>
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="enter your phone number"
              placeholderTextColor={"gray"}
              style={{
                fontSize: phone ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>
        <Pressable 
        onPress={register}
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
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
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
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});



// ... (existing code)
/* import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";


const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const RegisterScreen = () => {
  // ... (existing code)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert("Invalid Details", "Please enter all the details", [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }

    if (!isValidEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address", [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
      return; // Stop execution if email is invalid
    }

    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      const user = userCredentials._tokenResponse.email;
      const uid = auth.currentUser.uid;

      // doc method is used for database
      setDoc(doc(db, "user", `${uid}`), {
        email: user,
        phone: phone
      });
    });
  };

  // ... (remaining code)

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
            Register
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 17, marginTop: 15 }}>
            Create an Account
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

        
        <View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "500", fontSize: 18 }}>Phone No</Text>
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="enter your phone number"
              placeholderTextColor={"gray"}
              style={{
                fontSize: phone ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>
        <Pressable 
        onPress={register}
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
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
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
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    // (existing code) 

    </SafeAreaView>
  );
}; 

export default RegisterScreen;*/
