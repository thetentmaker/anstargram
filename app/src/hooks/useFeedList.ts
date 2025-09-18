import { useCallback } from "react";
import { FeedInfo } from "../@types/FeedInfo";
import {
    useRootRoute,
    useRootStackNavigation,
} from "../navigations/RootStackNavigation";

const useFeedList = () => {
  const route = useRootRoute<"FeedList">();
  const data = route.params.list;
  const navigation = useRootStackNavigation<"FeedList">();

  const navigateToBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const navigateToFeed = useCallback(
    (item: FeedInfo) => {
    //   navigation.navigate("AddFeed", { item });
    },
    [navigation]
  );
  return {
    data,
    navigateToBack,
    navigateToFeed,
  };
};

export default useFeedList;
