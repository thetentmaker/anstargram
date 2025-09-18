import { useCallback, useMemo, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRootStackNavigation } from "../navigations/RootStackNavigation";
import * as ImagePicker from "expo-image-picker";

const useAddFeed = () => {
  const navigation = useRootStackNavigation();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState<string>("");
  const safeAreaInsets = useSafeAreaInsets();
  const ctaBottom = useMemo(() => {
    return safeAreaInsets.bottom;
  }, [safeAreaInsets]);
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressGetPhoto = useCallback(async () => {
    console.log("onPressGetPhoto");
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    setSelectedPhoto(result.assets[0].uri);
  }, []);

  const onPressSave = useCallback(() => {
    console.log("onPressSave", inputMessage, selectedPhoto);
  }, [inputMessage, selectedPhoto]);

  const isExistSelectedPhoto = useMemo(() => {
    return selectedPhoto !== null;
  }, [selectedPhoto]);

  const canSave = useMemo(() => {
    return inputMessage.length > 0 && selectedPhoto !== null;
  }, [inputMessage, selectedPhoto]);

  const isCtaEnabled = useMemo(() => {
    return canSave;
  }, [canSave]);

  const getCtaProps = useMemo(() => {
    return {
      backgroundColor: isCtaEnabled ? "black" : "lightgrey",
      textColor: isCtaEnabled ? "white" : "grey",
    };
  }, [isCtaEnabled]);

  return {
    onPressBack,
    onPressGetPhoto,
    onPressSave,
    isExistSelectedPhoto,
    selectedPhoto,
    inputMessage,
    setInputMessage,
    ctaBottom,
    isCtaEnabled,
    getCtaProps,
  };
};

export default useAddFeed;
