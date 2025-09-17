import { useState } from "react";
import { RootStackNavigation } from "./navigations/RootStackNavigation";
import SplashView from "./splash/SplashView";

const RootApp = () => {
  const [initialize, setInitialize] = useState(false);

  if (!initialize)
    return <SplashView onFinishLoad={() => setInitialize(true)} />;

  return (
    <RootStackNavigation />
  );
};

export default RootApp;
