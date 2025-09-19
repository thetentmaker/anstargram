import React, { useEffect } from "react";
import { View } from "react-native";
import { Typography } from "../designsystem/Typography";
import { signIn, TypeUserDispatch } from "../actions/user";
import { useDispatch } from "react-redux";

interface SplashViewProps {
  onFinishLoad: () => void;
}

const SplashView = ({ onFinishLoad }: SplashViewProps) => {
  const dispatch = useDispatch<TypeUserDispatch>();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(signIn());
      onFinishLoad();
    };
    fetchData();
  }, [dispatch, onFinishLoad]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Typography>SPLASH VIEW</Typography>
    </View>
  );
};

export default SplashView;
