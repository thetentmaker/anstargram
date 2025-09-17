import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import AddFeedScreen from "../screens/AddFeedScreen";
import FeedListScreen from "../screens/FeedListScreen";
import BottomTabNavigation from "./BottomTabNavigation";

type RootStackParamList = {
  BottomTab: undefined;
  FeedList: {
    list: {
      id: string;
      content: string;
      writer: string;
      imageUrl: string;
      likeCount: number;
    }[];
  };
  AddFeed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "containedModal",
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="FeedList" component={FeedListScreen} />
      <Stack.Screen name="AddFeed" component={AddFeedScreen} />
    </Stack.Navigator>
  );
};

const useRootStackNavigation = <RouteName extends keyof RootStackParamList>() =>
  useNavigation<NativeStackNavigationProp<RootStackParamList, RouteName>>();

const useRootRoute = <RouteName extends keyof RootStackParamList>() =>
  useRoute<RouteProp<RootStackParamList, RouteName>>();

export { RootStackNavigation, useRootRoute, useRootStackNavigation };

