import { useEffect } from "react";
import { View } from "react-native";
import { Typography } from "../designsystem/Typography";

interface SplashViewProps {
  onFinishLoad: () => void;
}

const SplashView = ({ onFinishLoad }: SplashViewProps) => {
  useEffect(() => {
    setTimeout(() => {
      onFinishLoad();
    }, 1000);
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h1">SPLASH VIEW</Typography>
    </View>
  );
};

export default SplashView;
