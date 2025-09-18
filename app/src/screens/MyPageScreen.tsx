import React from "react";
import { FlatList, View } from "react-native";
import { FeedInfo } from "../@types/FeedInfo";
import Button from "../designsystem/Button";
import Header from "../designsystem/Header";
import RemoteImage from "../designsystem/RemoteImage";
import useMyPage from "../hooks/useMyPage";

const MyPageScreen = () => {
  const { data, navigateToFeedList, photoSize } = useMyPage();
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title>My Page</Header.Title>
      </Header>

      <FlatList<FeedInfo>
        data={data}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <Button onPress={() => navigateToFeedList(data)}>
              <RemoteImage
                uri={item.imageUrl}
                width={photoSize}
                height={photoSize}
              />
            </Button>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyPageScreen;
