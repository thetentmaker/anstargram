import React from "react";
import { FlatList, View } from "react-native";
import FeedListItem from "../components/FeedListItem";
import Header from "../designsystem/Header";
import Spacer from "../designsystem/Spacer";
import useHome from "../hooks/useHome";

const HomeScreen = () => {
  const { onPressHome, data } = useHome();
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title>Home</Header.Title>
        <Header.Icon name="add" onPress={onPressHome} />
      </Header>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FeedListItem
            image={item.imageUrl}
            comment={item.content}
            writer={item.writer.name}
            isLinked={false}
            likeCount={item.likeHistory.length}
            isLiked={item.likeHistory.includes(item.writer.uid)}
            onPressFeed={() => {
              console.log("onPressFeed");
            }}
          />
        )}
        ItemSeparatorComponent={() => <Spacer size={24} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
