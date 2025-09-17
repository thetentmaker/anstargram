import { RouteProp } from "@react-navigation/native";
import { BottomTabParamList } from "../navigations/BottomTabNavigation";

const useBottomTabNavigation = () => {
    const getIconName = (route: RouteProp<BottomTabParamList, keyof BottomTabParamList>) => {
        switch (route.name) {
            case "Home":
                return "home";
            case "MyPage":
                return "settings";
        }
    };
  return { getIconName };
};

export default useBottomTabNavigation;