import { useCallback, useEffect, useMemo } from "react";
import { useWindowDimensions } from "react-native";
import { useDispatch } from "react-redux";
import { FeedInfo } from "../@types/FeedInfo";
import { TypeUserDispatch } from "../actions/user";
import { useRootStackNavigation } from "../navigations/RootStackNavigation";
import { useTotalFeedList } from "../selectors/feed";

const useMyPage = () => {
  // const data = useMyFeedList();
  const totalData = useTotalFeedList();
  const rootNavigation = useRootStackNavigation();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch<TypeUserDispatch>();
  const photoSize = useMemo(() => width / 3, [width]);

  const navigateToFeedList = useCallback((params: FeedInfo[]) => {
    rootNavigation?.navigate("FeedList", { list: params });
  }, [rootNavigation]);

  useEffect(() => {
    // dispatch(getMyFeedList());
  }, [dispatch]);

  return {
    totalData,
    photoSize,
    dispatch,
    navigateToFeedList,
  };
};

export default useMyPage;
