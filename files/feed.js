import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Feed Screen</Text>
        <Button title="button" />
      </View>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
