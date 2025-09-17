import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useDispatch } from "react-redux";
import { getFeedList, TypeFeedListDispatch } from "../actions/feed";
import FeedListItem from "../components/FeedListItem";
import Header from "../designsystem/Header";
import Spacer from "../designsystem/Spacer";
import { useTotalFeedList } from "../selectors/feed";

const HomeScreen: React.FC = () => {
  const feedList = useTotalFeedList();
  const dispatch = useDispatch<TypeFeedListDispatch>();

  useEffect(() => {
    dispatch(getFeedList());
  });

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title>Home</Header.Title>
      </Header>

      <FlatList
        data={feedList}
        renderItem={({ item }) => (
          <FeedListItem
            image={item.imageUrl}
            comment={item.content}
            writer={item.writer.name}
            isLinked={false}
            likeCount={item.likeHistory.length}
            isLiked={item.likeHistory.includes(item.writer.uid)}
            onPressFeed={() => {console.log("onPressFeed")}}
          />
        )}
        ItemSeparatorComponent={() => <Spacer size={24} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
