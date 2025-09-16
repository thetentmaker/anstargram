import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FeedListItem from "./src/components/FeedListItem";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FeedListItem
          image="https://docs.expo.dev/static/images/tutorial/background-image.png"
          isLinked={true}
          likeCount={10}
          writer="Peter"
          comment="This is a comment"
          isLiked={false}
          onPressFeed={() => {
            console.log("FeedListItem pressed");
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
