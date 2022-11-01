import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  Modal,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { db, auth } from "./config/firebase";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import Top from "../components/secureTopParts";
import RedPart2 from "../components/secureTopParts";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment/moment";
import RedPart from "../components/topPart";
import ConfirmationPopup from "../components/modal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import modalImage from "../assets/tick.png";

const AddScammer = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const moment = require("moment");
  const time = moment(); // moment(new Date()).format("YYYY-MM-DD ")

  const timestamp = time.format("YYYY-MM-DD");

  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");

  const itemRef = collection(db, "flag");

  const user = auth.currentUser;

  const [selectedAddress, setSelectedAddress] = useState("");
  const [addresses] = useState(["Email Address", "Physical Address"]);
  const addflag = async () => {
    if (user != null) {
      console.log(user);

      if (mail !== "") {
        if (comment !== "") {
          const docRef = await addDoc(itemRef, {
            address: mail,
            addressType: selectedAddress,
            date: timestamp,
            comments: [{ [user.displayName]: comment }],
            likes: [user.displayName],
            userId:user.uid,
            // uid:user.uid,
            // commentText:comment

            // commentText:comment
          });
          setVisible(true);
        }

        console.log(mail);
      } else {
        console.log(" null");
        setVisible(false);
      }
    }

    //  await addDoc(commentRef,{comment:comment,flagId:docRef.id})
    // await addDoc(commentRef,{address:mail ,userId:user.uid,flagId:docRef.flag.id,comment:comment})

    //add to comments

    // }
  };

  const close = () => {
    setVisible(false);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      {user != null ? <RedPart2 /> : <RedPart />}
      <View >
        <View style={styles.text}>
          <Text style={styles.txt}>ADD A SCAMMER</Text>
        </View>
        <View style={styles.hhh}>
          <View style={styles.selectView}>
            <Picker
              style={[
                styles.dropdownPick,
                {
                  marginTop: "25px",
                  marginVertical: 10,
                  width: "100%",
                  height: 40,
                  backgroundColor: "#f3f5f6",
                },
              ]}
              selectedValue={selectedAddress}
              onValueChange={(itemVal) => {
                setSelectedAddress(itemVal);
                console.log({ selectedAddress });
              }}
            >
              {addresses.map((a) => (
                <Picker.Item label={a} value={a} key={a} />
              ))}
            </Picker>
          </View>

          <View style={styles.txtInput}>
            <Icon color="red" name="flag" type="font-awesome" size={15} />
            <TextInput
              onChangeText={(mail) => setMail(mail)}
              placeholder="Enter Scam Address"
              style={styles.textInput}
            />
          </View>
          <View style={styles.comment}>
            <TextInput
              onChangeText={(comment) => setComment(comment)}
              placeholder="Add Comment..."
              style={styles.addComment}
              multiline={true}
            />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={addflag} style={styles.button}>
            <Text style={styles.buttonText}>FLAG</Text>
          </TouchableOpacity>
        </View>
        </View>
        
        <View>
          <ConfirmationPopup visible={visible}>
            <Image
              source={modalImage}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            />
            <Text
              style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
            >
              Your Flag has been Added, Press ok to view Flag
            </Text>
            <TouchableOpacity style={{backgroundColor: "rgb(255,240,242)",width:60,height:30,borderRadius:20,textAlign:'center',justifyContent:'center'}} onPress={() => close()}>
              <Text>OK</Text>
            </TouchableOpacity>
          </ConfirmationPopup>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddScammer;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
    backgroundColor:'rgb(255,240,242)',
  },
//   midContainer: {
//     flex: 1,
//     // padding: '20px',
//   },

  text: {
    Width: "100%",
    // height: '5px',
    alignItems: "center",
    padding: '15%',
    backgroundColor: "rgb(255,240,242)",
    // boxShadow: "#ababab 0px 6px 9px -3px",
  },

  selectView: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // backgroundColor:'#d2d9dd',
  },
  txt: {
    fontFamily: "coda",
    fontSize: "normal",
    fontWeight: 400,
    fontSize: "20px",
    color: "rgba(0, 0, 0, 0.8)",
  },

  txtInput: {
    width: "100%",
    height: 40,
    paddingHorizontal: 20,
    display: "flex",
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f5f6",
    Width: 1,
    borderRadius: 4,
  },

  textInput: {
    width: "100%",
    paddingLeft: "10px",
    fontSize: 12,
  },

  addComment: {
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 6,
    height: 70,
    width: "100%",
    paddingBottom: 40,
    backgroundColor: "#f3f5f6",
    borderRadius: 4,
    marginTop: "10%",
  },

  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6%",
    paddingTop: 70,
  },

  button: {
    backgroundColor: "#EA4335",
    width: "100%",
    padding: 15,
    borderRadius: "27px",
    alignItems: "center",
    fontSize: "bold",
  },

  buttonText: {
    color: "white",
    fontSize: "bold",
  },

  bottomContainer: {
    backgroundColor: "black",
     marginTop: 100,
    paddingTop: 100,
  },

  hhh: {
    paddingHorizontal: "25px",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#ffffff",
    paddingTop:40,
    height:'90%',
   
  },
  dropdownPick: {
    height: 25,
    width: 130,
    borderRadius: 4,
    border: "none",
    backgroundColor: "#EDEDED",
    paddingLeft: "2%",
    fontSize: 12,
  },
});
