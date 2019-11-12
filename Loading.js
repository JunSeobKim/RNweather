import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={Styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={Styles.text}>Weather</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 50,
    paddingVertical: 200,
    backgroundColor: "#fdf6aa"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30
  }
});
