import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "4b4ff6b08388df14010977362fadd67d";

export default class extends React.Component {
  state = {
    isLoding: true
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  };

  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      // API로 위도,경도 보내고 날씨 정보 얻기
      this.getWeather(latitude, longitude);
      console.log(latitude, longitude);
      this.state({ isLoding: false });
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoding } = this.state;
    return isLoding ? <Loading /> : null;
  }
}
