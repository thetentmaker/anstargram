import dayjs from "dayjs";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { FeedInfo } from "../@types/FeedInfo";
import { useTotalFeedList } from "../selectors/feed";
import { RootReducer } from "../store";
import sleep from "../utils/sleep";

const GET_FEED_LIST_REQUEST = "GET_FEED_LIST_REQUEST" as const;
const GET_FEED_LIST_SUCCESS = "GET_FEED_LIST_SUCCESS" as const;
const GET_FEED_LIST_FAILURE = "GET_FEED_LIST_FAILURE" as const;

const CREATE_FEED_REQUEST = "CREATE_FEED_REQUEST" as const;
const CREATE_FEED_SUCCESS = "CREATE_FEED_SUCCESS" as const;
const CREATE_FEED_FAILURE = "CREATE_FEED_FAILURE" as const;

const FAVORITE_FEED_REQUEST = "FAVORITE_FEED_REQUEST" as const;
const FAVORITE_FEED_SUCCESS = "FAVORITE_FEED_SUCCESS" as const;
const FAVORITE_FEED_FAILURE = "FAVORITE_FEED_FAILURE" as const;

const favoriteFeedRequest = () => {
  return {
    type: FAVORITE_FEED_REQUEST,
  };
};
const favoriteFeedSuccess = (
  feedId: FeedInfo["id"],
  myId: string,
  action: "add" | "del"
) => {
  return {
    type: FAVORITE_FEED_SUCCESS,
    feedId,
    myId,
    action,
  };
};
const favoriteFeedFailure = () => {
  return {
    type: FAVORITE_FEED_FAILURE,
  };
};

const createFeedRequest = () => {
  return {
    type: CREATE_FEED_REQUEST,
  };
};
const createFeedSuccess = (item: FeedInfo) => {
  return {
    type: CREATE_FEED_SUCCESS,
    item,
  };
};
const createFeedFailure = () => {
  return {
    type: CREATE_FEED_FAILURE,
  };
};

const favoriteFeed =
  (item: FeedInfo): TypeFeedListThunkAction =>
  async (
    dispatch: ThunkDispatch<RootReducer, undefined, TypeFeedListThunkActions>,
    getState: () => RootReducer
  ) => {
    dispatch(favoriteFeedRequest());

    const myId = getState().userInfo.userInfo?.uid || null;
    // if (myId === item.writer.uid) {
    //   dispatch(favoriteFeedFailure());
    //   return;
    // }

    // await sleep(1000);
    const hasMyId =
      item.likeHistory.filter((likeUserId) => likeUserId === myId).length > 0;
    if (hasMyId) {
      // 좋아요 취소
      dispatch(favoriteFeedSuccess(item.id, myId || "", "del"));
    } else {
      // 좋아요 추가
      dispatch(favoriteFeedSuccess(item.id, myId || "", "add"));
    }
  };

const createFeed =
  (
    item: Omit<FeedInfo, "likeHistory">
  ): TypeFeedListThunkAction =>
  async (
    dispatch: ThunkDispatch<RootReducer, undefined, TypeFeedListThunkActions>,
    getState: () => RootReducer
  ) => {
    const userInfo = getState().userInfo.userInfo;
    dispatch(createFeedRequest());

    await sleep(1000);

    const newItem: FeedInfo = {
      id: item.id,
      writer: {
        name: userInfo?.name ?? "Unknown",
        uid: userInfo?.uid ?? "Unknown",
      },
      content: item.content,
      createdAt: dayjs().valueOf().toString(),
      likeHistory: [],
      imageUrl: item.imageUrl,
    };

    dispatch(createFeedSuccess(newItem));
  };
const getFeedListRequest = () => {
  return {
    type: GET_FEED_LIST_REQUEST,
  };
};

const getFeedListSuccess = (list: FeedInfo[]) => {
  return {
    type: GET_FEED_LIST_SUCCESS,
    list,
  };
};

const getFeedListFailure = () => {
  return {
    type: GET_FEED_LIST_FAILURE,
  };
};

const getFeedList =
  (): TypeFeedListThunkAction =>
  async (
    dispatch: ThunkDispatch<RootReducer, undefined, TypeFeedListThunkActions>
  ) => {
    dispatch(getFeedListRequest());

    await sleep(500); // TODO 네트워킹 구간

    dispatch(getFeedListSuccess(useTotalFeedList())); // 네트워킹으로부터 받은 데이터 설정
  };

type TypeFeedListThunkAction = ThunkAction<
  void,
  RootReducer,
  undefined,
  TypeFeedListThunkActions
>;
type TypeFeedListThunkActions =
  | ReturnType<typeof getFeedListRequest>
  | ReturnType<typeof getFeedListSuccess>
  | ReturnType<typeof getFeedListFailure>
  | ReturnType<typeof createFeedRequest>
  | ReturnType<typeof createFeedSuccess>
  | ReturnType<typeof createFeedFailure>
  | ReturnType<typeof favoriteFeedRequest>
  | ReturnType<typeof favoriteFeedSuccess>
  | ReturnType<typeof favoriteFeedFailure>;

type TypeFeedListDispatch = ThunkDispatch<
  RootReducer,
  undefined,
  TypeFeedListThunkActions
>;

export {
  CREATE_FEED_FAILURE,
  CREATE_FEED_REQUEST,
  CREATE_FEED_SUCCESS,
  createFeed,
  createFeedFailure,
  createFeedRequest,
  createFeedSuccess,
  FAVORITE_FEED_FAILURE,
  FAVORITE_FEED_REQUEST,
  FAVORITE_FEED_SUCCESS,
  favoriteFeed,
  favoriteFeedFailure,
  favoriteFeedRequest,
  favoriteFeedSuccess,
  GET_FEED_LIST_FAILURE,
  GET_FEED_LIST_REQUEST,
  GET_FEED_LIST_SUCCESS,
  getFeedList,
  getFeedListFailure,
  getFeedListRequest,
  getFeedListSuccess,
  TypeFeedListDispatch,
  TypeFeedListThunkAction,
  TypeFeedListThunkActions
};

