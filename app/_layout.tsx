import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import RootApp from "./src/RootApp";
import store from "./src/store";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootApp />
      </Provider>
    </SafeAreaProvider>
  );
}
