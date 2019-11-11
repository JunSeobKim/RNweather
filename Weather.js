import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
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
  }
});
