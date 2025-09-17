import { FeedInfo } from "../@types/FeedInfo";
import {
  CREATE_FEED_SUCCESS,
  FAVORITE_FEED_SUCCESS,
  GET_FEED_LIST_SUCCESS,
  TypeFeedListThunkActions,
} from "../actions/feed";

export type TypeFeedListReducer = {
  list: FeedInfo[];
};

const defaultFeedListState: TypeFeedListReducer = {
  list: [],
};

const feedListReducer = (
  state: TypeFeedListReducer = defaultFeedListState,
  action: TypeFeedListThunkActions
) => {
  switch (action.type) {
    case GET_FEED_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
      };
    case CREATE_FEED_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    // 이 코드는 좋아요(FAVORITE_FEED_SUCCESS) 액션이 발생했을 때 feedList의 상태를 업데이트하는 부분입니다.
    // state.list는 피드(FeedInfo)들의 배열입니다.
    // map을 사용해서 각 피드 아이템을 순회합니다.
    // 만약 현재 아이템의 id가 action.feedId와 같으면(즉, 좋아요를 누른 피드라면)
    //   action.action이 "add"일 때는 likeHistory 배열에 action.myId(좋아요 누른 유저 id)를 추가합니다.
    //   action.action이 "del"일 때는 likeHistory 배열에서 action.myId를 제거합니다.
    // 그렇지 않은 피드는 변경하지 않고 그대로 반환합니다.
    // 즉, 좋아요 추가/취소에 따라 해당 피드의 likeHistory만 변경됩니다.
    case FAVORITE_FEED_SUCCESS:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.feedId) {
            return {
              ...item,
              likeHistory:
                action.action === "add"
                  ? item.likeHistory.concat(action.myId)
                  : item.likeHistory.filter((id) => id !== action.myId),
            };
          }
          return item;
        }),
      };
    default: {
      return state;
    }
  }
};

export default feedListReducer;
