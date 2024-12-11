import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
// import axios from "axios";
// import { collection, db } from "firebase/firestore";
// collection
// axios


export default ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const [userEmail, setUserEmail] = useState(null);
  // const [userData, setUserData] = useState(null);
  // const [userLogin, setUserLogin] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Profile",
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

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const colRef = collection(db, "users");

  //     const docsSnap = await getDocs(colRef);
  //     docsSnap.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //   };
  //   fetchProfile();
    // const fetchProfile = async () => {
    //   try{
    //     const response = await axios.get()
    //   }catch(error){
    //     console.log("error",error);
    //   }
    // }
  // })
  /*  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/profile/${userId}`
        );
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProfile();
  });
 */


  return (
    <SafeAreaView>
      <View>
        {/* <View style={styles.container}> */}
        <View style={{ backgroundColor: "#003580", height: 75 }}></View>
        
        <Image
          style={{
            width: 130,
            height: 130,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: "white",
            marginBottom: 10,
            alignSelf: "center",
            position: "absolute",
            marginTop: 10,
          }}
          // source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
          source={{ uri: "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png" }}
          
        />
        <View style={{ marginTop: 40 }}>
          <View style={{ flex: 1, alignItems: "center", padding: 30 }}>
            <Text
              style={{ fontSize: 22, color: "#FFFFFF", fontWeight: "600" }}
            ></Text>
            <Text
              style={{ fontSize: 16, color: "#00BFFF", marginTop: 10 }}
            ></Text>
            <Text
              style={{
                fontSize: 16,
                // color: "#696969",
                color: "black",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              {/* Demo */}
            </Text>

            <View>
              <Text style={{ color: "black", fontSize: 18 }}>Demo</Text>
            </View>

            {/* <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                width: 400,
                marginTop: 8,
              }}
            /> */}

            <Pressable
              // onPress={() => navigation.navigate("Home")}
              style={{
                borderColor: "#318CE7",
                borderWidth: 0,
                width: "100%",
                padding: 10,
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
                height: 50,
                marginTop: 3,
                justifyContent: "center",
              }}
            >
              {/* <Text style={{ color: "black", fontSize: 18,textAlign: "center" }}>{route.params.email}</Text> */}
              <Text
                style={{ color: "black", fontSize: 20, textAlign: "center" }}
              >
              {/* Email : {route.params.email} */}
              Email
              {/* {route.params.email} */}
              </Text>
            </Pressable>
            {/* 
            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                width: 400,
                marginTop: 450,
              }}
            /> */}

            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={{
                marginTop: 20,
                height: 45,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
                width: 250,
                borderRadius: 10,
                backgroundColor: "#003580",
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Logout</Text>
            </Pressable>
          </View>
        </View>  
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
