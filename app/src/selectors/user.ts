import { useSelector } from "react-redux";
import { FeedInfo } from "../@types/FeedInfo";
import { UserInfo } from "../@types/UserInfo";
import { RootReducer } from "../store";

const useMyInfo = () =>
  useSelector<RootReducer, UserInfo | null>((state) => state.userInfo.userInfo);

const useMyFeedList = () =>
  useSelector<RootReducer, FeedInfo[]>((state) => state.userInfo.myFeedList);


export { useMyFeedList, useMyInfo };

