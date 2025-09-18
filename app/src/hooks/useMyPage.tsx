import { useCallback, useEffect, useMemo } from "react";
import { useWindowDimensions } from "react-native";
import { useDispatch } from "react-redux";
import { FeedInfo } from "../@types/FeedInfo";
import { getMyFeedList, TypeUserDispatch } from "../actions/user";
import { useRootStackNavigation } from "../navigations/RootStackNavigation";
import { useMyFeedList } from "../selectors/user";

const useMyPage = () => {
  const data = useMyFeedList();
  const rootNavigation = useRootStackNavigation();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch<TypeUserDispatch>();
  const photoSize = useMemo(() => width / 3, [width]);

  const navigateToFeedList = useCallback((params: FeedInfo[]) => {
    rootNavigation?.navigate("FeedList", { list: params });
  }, [rootNavigation]);

  useEffect(() => {
    dispatch(getMyFeedList());
  }, [dispatch]);

  return {
    data,
    photoSize,
    dispatch,
    navigateToFeedList,
  };
};

export default useMyPage;
