import React from "react";
import { FlatList, View } from "react-native";
import FeedListItem from "../components/FeedListItem";
import Header from "../designsystem/Header";
import Spacer from "../designsystem/Spacer";
import useFeedList from "../hooks/useFeedList";

const FeedListScreen = () => {
  const { data, navigateToBack, navigateToFeed } = useFeedList();
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title>Feed List</Header.Title>
        <Header.Icon name="close" onPress={navigateToBack} />
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
            onPressFeed={() => navigateToFeed(item)}
          />
        )}
        ItemSeparatorComponent={() => <Spacer size={24} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FeedListScreen;
