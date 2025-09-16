import { useWindowDimensions } from "react-native";
import { FeedListItemProps } from "../components/FeedListItem";

const useFeedListItem = ({
    image,
    isLinked,
    likeCount,
    writer,
    comment,
    isLiked,
    onPressFeed,
}: FeedListItemProps) => {
    const { width } = useWindowDimensions();
    const iconName = isLiked ? "heart" : "heart-outline";
    const iconColor = isLiked ? "red" : "black";
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
  };
};

export default useFeedListItem;