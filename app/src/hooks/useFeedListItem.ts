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
  const alphaRef = useRef<Animated.Value>(new Animated.Value(0)).current;

  const onPressDoubleTab = useCallback(() => {
    console.log("onPressDoubleTab");
    onPressFavorite();

    if (isLiked) {
      return;
    }

    scaleRef.setValue(0);
    alphaRef.setValue(1);

    Animated.timing(scaleRef, {
      toValue: 2,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        alphaRef.setValue(0);
      }, 1000);
    });
  }, [isLiked, onPressFavorite, scaleRef, alphaRef]);
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
    alphaRef,
  };
};

export default useFeedListItem;
