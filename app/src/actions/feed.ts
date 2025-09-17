import dayjs from "dayjs";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { FeedInfo } from "../@types/FeedInfo";
import { IMAGE_LIST } from "../data/constants";
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

export const favoriteFeed =
  (item: FeedInfo): TypeFeedListThunkAction =>
  async (
    dispatch: ThunkDispatch<RootReducer, undefined, TypeFeedListThunkActions>,
    getState: () => RootReducer
  ) => {
    dispatch(favoriteFeedRequest());

    const myId = getState().userInfo.userInfo?.uid || null;
    if (myId === item.writer.uid) {
      dispatch(favoriteFeedFailure());
      return;
    }

    await sleep(1000);
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

export const createFeed =
  (
    item: Omit<FeedInfo, "id" | "writer" | "createdAt" | "likeHistory">
  ): TypeFeedListThunkAction =>
  async (
    dispatch: ThunkDispatch<RootReducer, undefined, TypeFeedListThunkActions>,
    getState: () => RootReducer
  ) => {
    const userInfo = getState().userInfo.userInfo;
    dispatch(createFeedRequest());

    await sleep(200);

    const newItem: FeedInfo = {
      id: "ID_10",
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

    await sleep(500);

    const data = [
      {
        id: "ID_01",
        content: "CONTENT_01",
        writer: {
          name: "WRITER_NAME_01",
          uid: "WRITER_UID_01",
        },
        imageUrl: IMAGE_LIST[0],
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
          uid: "WRITER_UID_02",
        },
        imageUrl: IMAGE_LIST[1],
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
          uid: "WRITER_UID_03",
        },
        imageUrl: IMAGE_LIST[2],
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
          uid: "WRITER_UID_04",
        },
        imageUrl: IMAGE_LIST[3],
        likeHistory: [
          "LIKE_HISTORY_01",
          "LIKE_HISTORY_02",
          "LIKE_HISTORY_03",
          "LIKE_HISTORY_04",
          "LIKE_HISTORY_05",
        ],
        createdAt: dayjs().valueOf().toString(),
      },
    ];
    dispatch(getFeedListSuccess(data as FeedInfo[]));
  };


export type TypeFeedListThunkAction = ThunkAction<
  void,
  RootReducer,
  undefined,
  TypeFeedListThunkActions
>;
export type TypeFeedListThunkActions =
  | ReturnType<typeof getFeedListRequest>
  | ReturnType<typeof getFeedListSuccess>
  | ReturnType<typeof getFeedListFailure>
  | ReturnType<typeof createFeedRequest>
  | ReturnType<typeof createFeedSuccess>
  | ReturnType<typeof createFeedFailure>
  | ReturnType<typeof favoriteFeedRequest>
  | ReturnType<typeof favoriteFeedSuccess>
  | ReturnType<typeof favoriteFeedFailure>;

export type TypeFeedListDispatch = ThunkDispatch<RootReducer, undefined, TypeFeedListThunkActions>;


export {
    CREATE_FEED_FAILURE,
    CREATE_FEED_REQUEST,
    CREATE_FEED_SUCCESS,
    createFeedFailure,
    createFeedRequest,
    createFeedSuccess,
    FAVORITE_FEED_FAILURE,
    FAVORITE_FEED_REQUEST,
    FAVORITE_FEED_SUCCESS,
    favoriteFeedFailure,
    favoriteFeedRequest,
    favoriteFeedSuccess,
    GET_FEED_LIST_FAILURE,
    GET_FEED_LIST_REQUEST,
    GET_FEED_LIST_SUCCESS,
    getFeedListFailure,
    getFeedListRequest,
    getFeedListSuccess,
    getFeedList
};