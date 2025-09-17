import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../designsystem/TabIcon";
import useBottomTabNavigation from "../hooks/useBottomTabNavigation";
import HomeScreen from "../screens/HomeScreen";
import MyPageScreen from "../screens/MyPageScreen";

export type BottomTabParamList = {
  Home: undefined;
  MyPage: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const BottomTabNavigation = () => {
  const { getIconName } = useBottomTabNavigation();
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon name={getIconName(route)} size={20} color={color} />
        ),
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="MyPage" component={MyPageScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
