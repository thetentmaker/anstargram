import { useCallback, useRef } from "react";
import { Animated, useWindowDimensions } from "react-native";
import { FeedListItemProps } from "../components/FeedListItem";

const useFeedListItem = ({
  image,
  isLinked,
  likeCount,
  writer,
  comment,
  isLiked,
  onPressFeed,
  onPressFavorite,
}: FeedListItemProps) => {
  const { width } = useWindowDimensions();
  const iconName = "heart";
  const iconColor = isLiked ? "red" : "black";

  const scaleRef = useRef<Animated.Value>(new Animated.Value(0)).current;
  const opaciRef = useRef<Animated.Value>(new Animated.Value(0)).current;

  const onPressDoubleTab = useCallback(() => {
    console.log("onPressDoubleTab");
    onPressFavorite();

    // 이미 좋아요가 눌린 상태라면 애니메이션 실행하지 않음
    if (isLiked) return;

    // 하트 크기와 투명도 초기화
    scaleRef.setValue(0);
    opaciRef.setValue(1);

    // 하트 크기 커지는 애니메이션
    Animated.timing(scaleRef, {
      toValue: 2,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      // 1초 후에 투명도 0으로 서서히 사라지는(fade out) 애니메이션 실행
      Animated.timing(opaciRef, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  }, [isLiked, onPressFavorite, scaleRef, opaciRef]);
  return {
    imageWidth: width,
    imageHeight: width,
    likeCount,
    image,
    iconName,
    iconColor,
    writer,
    comment,
    onPressFeed,
    onPressFavorite,
    onPressDoubleTab,
    scaleRef,
    alphaRef: opaciRef,
  };
};

export default useFeedListItem;
