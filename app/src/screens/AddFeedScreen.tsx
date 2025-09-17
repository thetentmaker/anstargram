import React from "react";
import { View } from "react-native";
import Header from "../designsystem/Header";

const AddFeedScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title>Add Feed</Header.Title>
      </Header>
    </View>
  );
};

export default AddFeedScreen;
