import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import React, { memo, useState, useEffect } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
// import Header from '../../Components/Header';
// import CommonButton from '../../Components/CommonButton';
// Header
// import Modal from "react-native-modal";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import RazorpayCheckout from "react-native-razorpay";
import Header from "../components/Header";
import Modal from "react-native-modals";
// Modal

const Payment = ({ navigation, route }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const Price = route.params.price; 

  const OrderProduct = async () => {
    const user = firebase.auth().currentUser;

    if (user) {
      const db = firebase.firestore();
      try {
        await db.collection("orders").add({
          userId: user.uid,
          // rooms: rooms,
          offerPrice: offerPrice,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        console.log("Order placed successfully");
      } catch (error) {
        console.error("Error placing order:", error);
      }
    } else {
      console.error("User not authenticated");
    }
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const FunctionCombine = () => {
    if (selectedItem.title === "Razorpay") {
      handlePayment();
    } else {
      Alert.alert("Select Payment Method First");
    }
  };
  console.log("Price:", Price);

  const handlePayment = () => {
    const options = {
      description: "Purchase Description",
      // image: 'https://your-logo-url.com', // URL of the logo or image
      currency: "INR",
      key: "your-razorpay-key",
      amount: Price * 100,
      name: "Hotel",
      prefill: {
        email: "customer@example.com",
        contact: "9913734132",
        name: "John Doe",
      },
      theme: {
        color: "#F37254",
      },
    };

    // RazorpayCheckout.open(options)
    //   .then((data) => {
    //     // Handle successful payment
    //     toggleModal();
    //     OrderProduct();
    //     console.log("Payment successful:", data);
    //   })
    //   .catch((error) => {
    //     // Handle payment failure/error
    //     console.log("Payment error:", error);
    //   });
  };

  // ... (rest of your code remains unchanged)

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header
          title={"Payment"}
          margin={responsiveWidth(23)}
          onPress={() => navigation.goBack()}
        />
        <FlatList
          // showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: responsiveHeight(5) }}
          keyExtractor={(index) => {
            return index.id;
          }}
          data={List}
          renderItem={({ item }) => {
            console.log(item.id);
            return (
              <View
                style={{
                  // flex:1,
                  width: responsiveWidth(95),
                  height: responsiveWidth(20),
                  marginTop: responsiveHeight(2),
                  borderRadius: 12,
                  alignSelf: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#B8B8B8",
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 10,
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    marginRight: responsiveHeight(2),
                    width: responsiveWidth(15),
                    height: responsiveHeight(5),
                  }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: responsiveFontSize(2),
                      fontWeight: "bold",
                      marginBottom: 3,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    // style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setSelectedItem(item)}
                  >
                    <View
                      style={{
                        height: responsiveWidth(5),
                        width: responsiveWidth(5),
                        borderRadius: responsiveWidth(4),
                        borderWidth: responsiveWidth(0.5),
                        borderColor: item === selectedItem ? "black" : "black",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: responsiveHeight(2),
                        color: "black",
                      }}
                    >
                      {item === selectedItem && (
                        <View
                          style={{
                            height: responsiveWidth(2.5),
                            width: responsiveWidth(2.5),
                            borderRadius: responsiveWidth(2),
                            backgroundColor: "black",
                          }}
                        />
                      )}
                    </View>
                    {/* <Text>{item.name}</Text> */}
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          width: responsiveWidth(100),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: responsiveHeight(10),
          elevation: 15,
          backgroundColor: "white",
          shadowColor: "black",
        }}
      >
        {/* <View style={{ width: responsiveWidth(95), alignSelf: "center" }}>
          <CommonButton
            title={"Continue"}
            bgColor={"black"}
            textColor={"white"}
            onPress={() => FunctionCombine()}
          />
        </View> */}

        <TouchableOpacity
          onPress={() => FunctionCombine()}
          // onPress={confirmBooking}
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
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Pay
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="wide"
          transparent={true}
          // visible={modalVisible}
          isVisible={isModalVisible}
          onRequestClose={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={require("../assets/Home/orderSuccess.png")}
                style={styles.image}
                resizeMode="stretch"
              />
              <Text style={styles.modalText}>Order Successful!</Text>
              <Text style={styles.modalText1}>
                You have Successfully made order
              </Text>
              <View
                style={{ width: responsiveWidth(70), alignItems: "center" }}
              >
                {/* <CommonButton
                  title={"View Order"}
                  bgColor={"black"}
                  textColor={"white"}
                  fontSize={12}
                  onPress={() => navigation.navigate("Order")}
                /> */}

                <TouchableOpacity
                  onPress={() => navigation.navigate("Bookings")}
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
                  <Text style={{ color: "white", fontSize: 18 }}>
                    View Bookings
                  </Text>
                </TouchableOpacity>
                {/* <CommonButton
                  title={"View E-Receipt"}
                  bgColor={"#E7E7E7"}
                  textColor={"#101010"}
                  fontSize={12}
                  onPress={() => navigation.navigate("Erecipt")}
                /> */}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default memo(Payment);

// ... (rest of your code remains unchanged)

const List = [
  {
    id: 1,
    icon: require("../assets/Profile/Payment1.png"),
    title: "Razorpay",
  },
  // {
  //   id: 2,
  //   icon: require('..//../assets/Profile/Payment2.png'),
  //   title: 'PayU',
  // },
  // {
  //   id: 3,
  //   icon: require('..//../assets/Profile/Payment3.png'),
  //   title: 'Instamojo',
  // },
  // {
  //   id: 4,
  //   icon: require('..//../assets/Profile/Payment4.png'),
  //   title: 'PayPal',
  // },
];

const styles = StyleSheet.create({
  text: {
    width: 65,
    height: 37,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "black",
    color: "white",
    alignContent: "center",
    textAlign: "center",
  },
  text1: {
    width: 85,
    height: 37,
    marginLeft: 8,
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    color: "black",
    alignContent: "center",
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
  },
  box: {
    width: responsiveWidth(95),
    height: responsiveWidth(32),
    borderRadius: responsiveWidth(4.5),
    borderColor: "#A6ACAF",
    borderWidth: 1,
    marginTop: responsiveHeight(2),
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: responsiveHeight(1),
    width: responsiveWidth(25),
    height: responsiveWidth(25),
  },
  icon111: {
    zIndex: 1000,
    position: "absolute",
    alignItems: "center",
    marginTop: responsiveHeight(1.5),
    right: responsiveWidth(3.9),
    backgroundColor: "#F3F3F3",
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    borderRadius: responsiveWidth(2),
    justifyContent: "center",
  },
  icon1: {
    alignSelf: "center",
    marginTop: responsiveHeight(1),
  },
  titleup: {
    alignSelf: "center",
    marginLeft: responsiveHeight(2),
  },
  title: {
    color: "black",
    fontWeight: "500",
    marginBottom: responsiveHeight(1),
  },
  title1: {
    color: "#999999",
  },
  title2: {
    color: "black",
    fontWeight: "900",
    alignSelf: "center",
  },
  title3: {
    backgroundColor: "#F3F3F3",
    borderRadius: responsiveWidth(2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: responsiveWidth(35),
    width: responsiveWidth(10),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(2),
    top: responsiveHeight(0.9),
  },
  title33: {
    fontSize: responsiveFontSize(1.5),
    color: "black",
    fontWeight: "400",
  },
  stylename: {
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
    color: "black",
  },

  centeredView: {
    // top: '20%',
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: responsiveHeight(53),
    width: responsiveWidth(80),
    backgroundColor: "#FFFFFF",
    borderRadius: responsiveWidth(8),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    paddingTop: responsiveHeight(2),
    fontSize: responsiveFontSize(2.7),
    fontWeight: "900",
    color: "#101010",
    marginBottom: responsiveHeight(2),
    textAlign: "center",
  },
  modalText1: {
    marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
  },
  button1: {
    width: responsiveWidth(43),
    height: responsiveHeight(5.8),
    borderRadius: responsiveWidth(3),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "center",
    flexDirection: "row",
  },
  button2: {
    width: responsiveWidth(43),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(3),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderColor: "#EFEFEF",
    borderWidth: 1,
    alignSelf: "center",
    flexDirection: "row",
  },
});
