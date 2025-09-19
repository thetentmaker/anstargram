import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { FeedInfo } from "../@types/FeedInfo";
import { UserInfo } from "../@types/UserInfo";
import { RootReducer } from "../store";
import sleep from "../utils/sleep";

const SET_USER_INFO = "SET_USER_INFO" as const;

const GET_MY_FEED_REQUEST = "GET_MY_FEED_REQUEST" as const;
const GET_MY_FEED_SUCCESS = "GET_MY_FEED_SUCCESS" as const;
const GET_MY_FEED_FAILURE = "GET_MY_FEED_FAILURE" as const;

const getMyFeedRequest = () => {
  return {
    type: GET_MY_FEED_REQUEST,
  };
};

const getMyFeedSuccess = (list: FeedInfo[]) => {
  return {
    type: GET_MY_FEED_SUCCESS,
    list,
  };
};

const getMyFeedFailure = () => {
  return {
    type: GET_MY_FEED_FAILURE,
  };
};

const setUserInfo = (user: UserInfo) => {
  return {
    type: SET_USER_INFO,
    user,
  };
};

const signIn =
  (): TypeUserThunkAction =>
  async (
    dispatch: ThunkDispatch<RootReducer, undefined, TypeUserInfoActions>
  ) => {
    await sleep(1000);
    dispatch(
      setUserInfo({
        name: "Peter",
        uid: "Peter-8282",
        profileImageUrl:
          "https://avatars.githubusercontent.com/u/215279815?v=4",
      })
    );
  };

const getMyFeedList =
  (): TypeUserThunkAction =>
  async (
    dispatch: ThunkDispatch<RootReducer, undefined, TypeUserInfoActions>,
    getState: () => RootReducer
  ) => {
    dispatch(getMyFeedRequest());
    await sleep(1000); // 네트워킹 구간
    dispatch(getMyFeedSuccess(getState().userInfo.myFeedList)); // 네트워킹으로부터 받은 데이터 중 myFeedList 설정
  };

type TypeUserThunkAction = ThunkAction<
  Promise<void>,
  RootReducer,
  undefined,
  TypeUserInfoActions
>;
type TypeUserInfoActions =
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof getMyFeedRequest>
  | ReturnType<typeof getMyFeedSuccess>
  | ReturnType<typeof getMyFeedFailure>;

type TypeUserDispatch = ThunkDispatch<
  RootReducer,
  undefined,
  TypeUserInfoActions
>;

export {
  GET_MY_FEED_REQUEST,
  GET_MY_FEED_SUCCESS,
  getMyFeedFailure,
  getMyFeedList,
  getMyFeedRequest,
  getMyFeedSuccess,
  SET_USER_INFO,
  setUserInfo,
  signIn,
  TypeUserDispatch,
  TypeUserInfoActions,
  TypeUserThunkAction
};

