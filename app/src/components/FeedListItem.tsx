import { Animated, StyleSheet, View } from "react-native";
import Button from "../designsystem/Button";
import { DoubleTap } from "../designsystem/DoubleTabButton";
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
    writer,
    comment,
    onPressDoubleTab,
    scaleRef,
    alphaRef,
    onPressHeart,
  } = useFeedListItem(props);

  return (
    <View>
      <View>
        {/* 이미지 더블 클릭 시 하트 애니메이션 실행 */}
        <DoubleTap onDoubleTap={onPressDoubleTab}>
          <View style={{ width: imageWidth, height: imageHeight }}>
            <RemoteImage uri={image} width={imageWidth} height={imageHeight} />
            <View style={styles.heartIconContainer}>
              {/* Animated.View로 감싸기 */}
              <Animated.View
                style={{ transform: [{ scale: scaleRef }], opacity: alphaRef }}
              >
                <Icon name="heart" size={64} color="red" />
              </Animated.View>
            </View>
          </View>
        </DoubleTap>
        {/* 좋아요 아이콘 */}
        <Button onPress={onPressHeart}>
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
    </View>
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
  heartIconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
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
