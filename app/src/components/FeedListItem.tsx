import { StyleSheet, View } from "react-native";
import Button from "../designsystem/Button";
import Icon from "../designsystem/Icons";
import RemoteImage from "../designsystem/RemoteImage";
import Spacer from "../designsystem/Spacer";
import { Typography } from "../designsystem/Typography";
import useFeedListItem from "../hooks/useFeedListItem";

export interface FeedListItemProps {
  image: string;
  isLinked: boolean;
  likeCount: number;
  writer: string;
  comment: string;
  isLiked: boolean;
  onPressFeed: () => void;
  onPressFavorite: () => void;
}

const FeedListItem: React.FC<FeedListItemProps> = (props) => {
  const {
    imageWidth,
    imageHeight,
    likeCount,
    image,
    iconName,
    iconColor,
    onPressFeed,
    writer,
    comment,
    onPressFavorite,
  } = useFeedListItem(props);

  return (
    <Button onPress={onPressFeed}>
      <View>
        <RemoteImage uri={image} width={imageWidth} height={imageHeight} />

        {/* 좋아요 아이콘 */}
        <Button onPress={onPressFavorite}>
          <View style={styles.likeIconContainer}>
            <Icon name={iconName} size={24} color={iconColor} />
          </View>
        </Button>

        {/* 좋아요 수 */}
        <View style={styles.likeCountContainer}>
          <Typography variant="body1">{`좋아요 ${likeCount}개`}</Typography>
          <Spacer size={4} />
          <View style={styles.writerContainer}>
            <Typography variant="body1">{writer}</Typography>
            <Spacer horizontal size={8} />
            <Typography variant="body1">{comment}</Typography>
          </View>
        </View>
      </View>
    </Button>
  );
};

export default FeedListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  likeIconContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  likeCountContainer: {
    paddingHorizontal: 12,
  },
  writerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
