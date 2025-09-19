import React, { useRef } from "react";
import { Pressable } from "react-native";


interface DoubleTapProps {
  onDoubleTap: () => void;
  delay?: number;
  children: React.ReactElement;
}

const DoubleTap = ({
  onDoubleTap,
  delay = 250,
  children,
}: DoubleTapProps) => {
  const lastTapRef = useRef<number>(0);

  return (
    <Pressable
      onPress={() => {
        const now = Date.now();
        if (now - lastTapRef.current < delay) {
          onDoubleTap();
        }
        lastTapRef.current = now;
      }}
    >
      {children}
    </Pressable>
  );
}

export { DoubleTap };
