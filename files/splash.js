import React, { Component } from "react";
import * as Animatable from "react-native-animatable";

import {
  Image,
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class splash extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.View style={styles.image} animation="bounceIn">
            <Image
              source={require("../assets/icon.png")}
              resizeMode="stretch"
              style={{ height: 120, width: 120 }}
            />
          </Animatable.View>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Get Started With MySacco</Text>
          <Text style={styles.text}>...Connect as you save money</Text>
          <View style={styles.start}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Wait", "Still Working on that....");
              }}
            >
              <Text style={{ fontSize: 17, color: "#fff" }}>
                Get Started
                <Icon
                  name="arrow-right"
                  size={17}
                  color="#fff"
                  style={{ paddingHorizontal: 5 }}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009578",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1.5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
  },
  start: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 30,
    bottom: 120,
    backgroundColor: "#009783",
    borderRadius: 25,
    padding: 10,
    width: 150,
  },
  image: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 100,
  },
});
