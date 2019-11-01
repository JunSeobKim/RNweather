import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoding: true
  };
  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      // API로 위도,경도 보내고 날씨 정보 얻기
      console.log(latitude, longitude);
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
