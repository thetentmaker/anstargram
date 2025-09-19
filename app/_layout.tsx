import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import RootApp from "./src/RootApp";
import store from "./src/store";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootApp />
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
}
