import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FeedInfo } from "../@types/FeedInfo";
import { TypeFeedListDispatch, favoriteFeed } from "../actions/feed";
import {
  useRootRoute,
  useRootStackNavigation,
} from "../navigations/RootStackNavigation";

const useFeedList = () => {
  const route = useRootRoute<"FeedList">();
  const data = route.params.list;
  const navigation = useRootStackNavigation<"FeedList">();
  const dispatch = useDispatch<TypeFeedListDispatch>();
  const navigateToBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const navigateToFeed = useCallback((item: FeedInfo) => {
    //   navigation.navigate("AddFeed", { item });
  }, []);
  const onPressFavorite = useCallback(
    (item: FeedInfo) => {
      dispatch(favoriteFeed(item));
    },
    [dispatch]
  );
  return {
    data,
    navigateToBack,
    navigateToFeed,
    onPressFavorite,
  };
};

export default useFeedList;
