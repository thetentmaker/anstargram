import React from "react";
import { View } from "react-native";
import Header from "../designsystem/Header";

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title>Home</Header.Title>
      </Header>
    </View>
  );
};

export default HomeScreen;
