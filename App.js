import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./files/splash";
import Login from "./files/login";
import Home from "./files/home";

export default function App() {
  // return <Login />;
  // return <Splash />;
  return <Home member={"Xamuel"} />;
}
