import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { favoriteFeed, TypeFeedListDispatch } from "../actions/feed";
import { useRootStackNavigation } from "../navigations/RootStackNavigation";
import { useTotalFeedList } from "../selectors/feed";
import { FeedInfo } from "../@types/FeedInfo";

const useHome = () => {
  const data = useTotalFeedList();
  const dispatch = useDispatch<TypeFeedListDispatch>();
  const navigation = useRootStackNavigation();

  const onPressHome = useCallback(() => {
    navigation.navigate("AddFeed");
  }, [navigation]);

  const onPressFavorite = useCallback(
    (item: FeedInfo) => {
      dispatch(favoriteFeed(item));
    },
    [dispatch]
  );
  useEffect(() => {
    // dispatch(getFeedList());
  }, [dispatch]);

  return {
    onPressHome,
    data,
    onPressFavorite,
  };
};

export default useHome;
