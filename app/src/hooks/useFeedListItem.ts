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
    onPressFavorite,
}: FeedListItemProps) => {
    const { width } = useWindowDimensions();
    const iconName = "heart";
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
    onPressFavorite,
  };
};

export default useFeedListItem;