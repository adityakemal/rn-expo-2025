// CustomBottomSheet.tsx
import React, { useCallback, useRef } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, Button } from "react-native";

interface CustomBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheetCustom: React.FC<CustomBottomSheetProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  React.useEffect(() => {
    if (isVisible) {
      handlePresentModalPress();
    }
  }, [isVisible, handlePresentModalPress]);

  return (
    <BottomSheetModal ref={bottomSheetModalRef} onChange={handleSheetChanges}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheetCustom;
