import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Chat Screen</Text>
        <Button title="button" />
      </View>
    );
  }
}

export default Chat;
