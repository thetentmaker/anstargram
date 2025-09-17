import React, { useEffect, useMemo } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import { useDispatch } from "react-redux";
import { FeedInfo } from "../@types/FeedInfo";
import { getMyFeedList, TypeUserDispatch } from "../actions/user";
import Button from "../designsystem/Button";
import Header from "../designsystem/Header";
import RemoteImage from "../designsystem/RemoteImage";
import { useRootStackNavigation } from "../navigations/RootStackNavigation";
import { useMyFeedList } from "../selectors/user";

const MyPageScreen = () => {
  const data = useMyFeedList();
  const rootNavigation = useRootStackNavigation();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch<TypeUserDispatch>();
  const photoSize = useMemo(() => width / 3, [width]);

  useEffect(() => {
    dispatch(getMyFeedList());
  }, [dispatch]);
  
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
            <Button
              onPress={() => {
                rootNavigation?.navigate("FeedList", { list: data });
              }}
            >
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
