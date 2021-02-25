import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { passwordVisible: true };
    this.togglePassword = this.togglePassword.bind(this);
  }
  togglePassword() {
    this.setState({
      ...this.state,
      passwordVisible: !this.state.passwordVisible,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View style={styles.welcome} animation="fadeIn">
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "#fff",
              paddingHorizontal: 20,
            }}
          >
            Hello There
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#fff",
              paddingHorizontal: 20,
            }}
          >
            Register Under Your Sacco
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.login} animation="fadeInUpBig">
          <Text style={{ fontSize: 17, marginVertical: 5 }}>Sacco ID</Text>
          <View style={styles.input_ctr}>
            <Feather name="users" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Sacco ID"
              autoCapitalize="none"
              style={styles.text_input}
            />
          </View>
          <Text style={{ fontSize: 17, marginVertical: 5 }}>Mobile Number</Text>
          <View style={styles.input_ctr}>
            <Feather name="user" color="#05375a" size={20} />
            <TextInput
              keyboardType="numeric"
              placeholder="Your Mobile Number"
              autoCapitalize="none"
              style={styles.text_input}
            />
          </View>
          <Text style={{ fontSize: 17, marginVertical: 5 }}>Set Password</Text>
          <View style={styles.input_ctr}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              keyboardType="visible-password"
              placeholder="Set Password"
              autoCapitalize="none"
              secureTextEntry={this.state.passwordVisible}
              style={styles.text_input}
            />
            <Feather
              name="eye-off"
              color="gray"
              size={20}
              onPress={this.togglePassword}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("bottomNav");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                paddingBottom: 5,
                marginRight: 15,
              }}
            >
              Register
            </Text>
            <FontAwesome5Icon name="chevron-right" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("login");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                paddingBottom: 5,
                marginRight: 15,
              }}
            >
              Sign In
            </Text>
            <FontAwesome5Icon name="chevron-right" size={18} color="#fff" />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009783",
  },
  login: {
    flex: 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  welcome: {
    flex: 1.5,
    justifyContent: "flex-end",
    paddingVertical: 15,
  },
  input_ctr: {
    marginBottom: 20,
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  text_input: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 17,
    width: Dimensions.get("window").width * 0.75,
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#009783",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    marginVertical: 10,
  },
});
export default Register;
