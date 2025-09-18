import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFeedList, TypeFeedListDispatch } from "../actions/feed";
import { useRootStackNavigation } from "../navigations/RootStackNavigation";
import { useTotalFeedList } from "../selectors/feed";

const useHome = () => {
  const data = useTotalFeedList();
  const dispatch = useDispatch<TypeFeedListDispatch>();
  const navigation = useRootStackNavigation();
  const onPressHome = useCallback(() => {
    navigation.navigate("AddFeed");
  }, [navigation]);
  useEffect(() => {
    dispatch(getFeedList());
  }, [dispatch]);

  return {
    onPressHome,
    data,
  };
};

export default useHome;
