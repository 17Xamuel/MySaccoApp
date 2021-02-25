import React, { Component } from "react";
import {
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>
                Xamuel
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, color: "#fff" }}>
                Get a Loan for your future
              </Text>
            </View>
          </View>
          <View style={styles.saveCtr}>
            <View style={styles.saveInfo}>
              <View style={styles.saveHeader}>
                <View style={styles.headerIcon}>
                  <FontAwesome5Icon name="user" size={20} color="#009783" />
                </View>
                <Text style={{ fontSize: 20 }}>Your Interest: UGX 50000</Text>
              </View>
              <View style={styles.saveMain}>
                <Text>Inputs will be styled in here, have a nice time</Text>
              </View>
              <TouchableOpacity style={styles.saveFooter}>
                <Text
                  style={{
                    fontSize: 24,
                    color: "#fff",
                    paddingBottom: 5,
                    marginRight: 15,
                  }}
                >
                  Get A Loan
                </Text>
                <FontAwesome5Icon name="chevron-right" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Loan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    flex: 1,
    backgroundColor: "#009783",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  saveCtr: {
    flex: 3,
    position: "relative",
  },
  saveInfo: {
    position: "absolute",
    left: 10,
    right: 10,
    top: -35,
    borderRadius: 5,
  },
  saveHeader: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: Dimensions.get("window").height * 0.1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerIcon: {
    backgroundColor: "#f4f4f4",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    marginRight: 20,
  },
  saveMain: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: Dimensions.get("window").height * 0.4,
    marginVertical: 10,
  },
  saveFooter: {
    borderRadius: 5,
    backgroundColor: "#009783",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});
