import React from "react";
import { View } from "react-native";
import Header from "../designsystem/Header";

const FeedListScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title>Feed List</Header.Title>
      </Header>
    </View>
  );
};

export default FeedListScreen;
