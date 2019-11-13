import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "ios-cloud-outline",
    gradient: ["#2c3e50", "#bdc3c7"]
  },
  Clear: {
    iconName: "ios-moon",
    gradient: ["#605C3C", "#3C3B3F"],
    color: "yellow"
  },
  Thunderstorm: {
    iconName: "ios-thunderstorm",
    gradient: ["#D38312", "#A83279"]
  },
  Drizzle: {
    iconName: "md-rainy",
    gradient: ["#4CA1AF", "#C4E0E5"]
  },
  Rain: {
    iconName: "ios-rainy",
    gradient: ["#8e9eab", "#eef2f3"]
  },
  Snow: {
    iconName: "ios-snow",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  Haze: {
    iconName: "ios-reorder",
    gradient: ["#B993D6", "#8CA6DB"]
  },
  Mist: {
    iconName: "ios-reorder",
    gradient: ["#B993D6", "#8CA6DB"]
  },
  Dust: {
    iconName: "md-apps",
    gradient: ["#E6DADA", "#274046"]
  }
};

export default function Weather({ temp, condition }) {
  console.log(temp);
  console.log(condition);
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons
          name={weatherOptions[condition].iconName}
          size={96}
          color={weatherOptions[condition].color || "white"}
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

// prop 체크
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ])
};

// 스타일
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
