import React from "react";
import { View } from "react-native";
import Button from "../designsystem/Button";
import Header from "../designsystem/Header";
import Icon from "../designsystem/Icons";
import MultiLineInput from "../designsystem/MultiLineInput";
import RemoteImage from "../designsystem/RemoteImage";
import Spacer from "../designsystem/Spacer";
import { Typography } from "../designsystem/Typography";
import useAddFeed from "../hooks/useAddFeed";

const AddFeedScreen = () => {
  const {
    onPressBack,
    isExistSelectedPhoto,
    selectedPhoto,
    onPressGetPhoto,
    inputMessage,
    setInputMessage,
    onPressSave,
    ctaBottom,
    isCtaEnabled,
    getCtaProps,
  } = useAddFeed();

  return (
    <View style={{ flex: 1 }}>
      {/* 헤더 */}
      <Header>
        <Header.Title>ADD FEED</Header.Title>
        <Header.Icon name="close" onPress={onPressBack} />
      </Header>
      {/* 본문 */}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingHorizontal: 20,
          paddingTop: 32,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* 이미지 선택 버튼 */}
          <Button onPress={onPressGetPhoto}>
            {isExistSelectedPhoto && (
              <RemoteImage
                uri={selectedPhoto ?? ""}
                width={100}
                height={100}
                style={{ borderRadius: 4 }}
              />
            )}
            {!isExistSelectedPhoto && (
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                  backgroundColor: "lightgrey",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="plus" size={32} color="grey" />
              </View>
            )}
          </Button>
          <Spacer horizontal size={8} />
          {/* 메시지 입력 필드 */}
          <View style={{ flex: 1 }}>
            <MultiLineInput
              value={inputMessage}
              onChangeText={setInputMessage}
              onSubmitEditing={onPressSave}
              placeholder="입력해주세요."
              height={80}
              fontSize={16}
            />
          </View>
        </View>
      </View>
      {/* 하단 버튼 */}
      <Button onPress={onPressSave} disabled={!isCtaEnabled}>
        <View style={{ backgroundColor: getCtaProps.backgroundColor }}>
          <View
            style={{
              height: 52,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" color={getCtaProps.textColor}>
              저장하기
            </Typography>
          </View>
          <Spacer size={ctaBottom} />
        </View>
      </Button>
    </View>
  );
};

export default AddFeedScreen;
