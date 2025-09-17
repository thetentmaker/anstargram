import dayjs from "dayjs";
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
        name: "TEST_NAME",
        uid: "TEST_UID",
        profileImageUrl: "TEST_PROFILE_IMAGE_URL",
      })
    );
  };

  
const getMyFeedList =
  (): TypeUserThunkAction =>
  async (
    dispatch: ThunkDispatch<RootReducer, undefined, TypeUserInfoActions>
  ) => {
    dispatch(getMyFeedRequest());
    await sleep(500);
    dispatch(
      getMyFeedSuccess([
        {
          id: "ID_01",
          content: "CONTENT_01",
          writer: {
            name: "WRITER_NAME_01",
            uid: "UID_01",
          },
          imageUrl: "IMAGE_URL_01",
          likeHistory: [
            "LIKE_HISTORY_01",
            "LIKE_HISTORY_02",
            "LIKE_HISTORY_03",
            "LIKE_HISTORY_04",
            "LIKE_HISTORY_05",
          ],
          createdAt: dayjs().valueOf().toString(),
        },
        {
          id: "ID_02",
          content: "CONTENT_02",
          writer: {
            name: "WRITER_NAME_02",
            uid: "UID_02",
          },
          imageUrl: "IMAGE_URL_02",
          likeHistory: [
            "LIKE_HISTORY_01",
            "LIKE_HISTORY_02",
            "LIKE_HISTORY_03",
            "LIKE_HISTORY_04",
            "LIKE_HISTORY_05",
          ],
          createdAt: dayjs().valueOf().toString(),
        },
        {
          id: "ID_03",
          content: "CONTENT_03",
          writer: {
            name: "WRITER_NAME_03",
            uid: "UID_03",
          },
          imageUrl: "IMAGE_URL_03",
          likeHistory: [
            "LIKE_HISTORY_01",
            "LIKE_HISTORY_02",
            "LIKE_HISTORY_03",
            "LIKE_HISTORY_04",
            "LIKE_HISTORY_05",
          ],
          createdAt: dayjs().valueOf().toString(),
        },
        {
          id: "ID_04",
          content: "CONTENT_04",
          writer: {
            name: "WRITER_NAME_04",
            uid: "UID_04",
          },
          imageUrl: "IMAGE_URL_04",
          likeHistory: [
            "LIKE_HISTORY_01",
            "LIKE_HISTORY_02",
            "LIKE_HISTORY_03",
            "LIKE_HISTORY_04",
            "LIKE_HISTORY_05",
          ],
          createdAt: dayjs().valueOf().toString(),
        },
      ])
    );
  };
export {
    GET_MY_FEED_SUCCESS, getMyFeedFailure,
    getMyFeedRequest,
    getMyFeedSuccess,
    SET_USER_INFO,
    setUserInfo,
    signIn
};

export type TypeUserThunkAction = ThunkAction<
  Promise<void>,
  RootReducer,
  undefined,
  TypeUserInfoActions
>;
export type TypeUserInfoActions =
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof getMyFeedRequest>
  | ReturnType<typeof getMyFeedSuccess>
  | ReturnType<typeof getMyFeedFailure>;

export type TypeUserDispatch = ThunkDispatch<RootReducer, undefined, TypeUserInfoActions>;