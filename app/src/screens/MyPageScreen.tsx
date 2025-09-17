import React from "react";
import { View } from "react-native";
import Header from "../designsystem/Header";

const MyPageScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title>My Page</Header.Title>
      </Header>
    </View>
  );
};

export default MyPageScreen;
