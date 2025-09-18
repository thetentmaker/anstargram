import { useSelector } from "react-redux";
import { FeedInfo } from "../@types/FeedInfo";
import { RootReducer } from "../store";

const useTotalFeedList = () =>
  useSelector<RootReducer, FeedInfo[]>((state) => state.feedList.list);

export { useTotalFeedList };
