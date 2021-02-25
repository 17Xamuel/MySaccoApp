import React, { Component } from "react";
import { SafeAreaView, Button, Text, View, StyleSheet } from "react-native";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Chat Screen</Text>
          <Button title="button" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Chat;
