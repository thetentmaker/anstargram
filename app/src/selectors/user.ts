import { useSelector } from "react-redux";
import { FeedInfo } from "../@types/FeedInfo";
import { RootReducer } from "../store";
import { UserInfo } from "../@types/UserInfo";

const useMyInfo = () =>
  useSelector<RootReducer, UserInfo | null>((state) => state.userInfo.userInfo);

const useMyFeedList = () =>
  useSelector<RootReducer, FeedInfo[]>((state) => state.userInfo.myFeedList);

export { useMyInfo, useMyFeedList };
