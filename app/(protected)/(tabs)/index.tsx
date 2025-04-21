import { fontSize } from "@/lib/util";
import { useAuth } from "@/stores/auth";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheetCustom from "@/components/ui/BottomSheetCustom";

const Menu = () => {
  const router = useRouter();
  const { token, logout } = useAuth();

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleCloseBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View className="p-5 gap-y-5">
      <Text>lollgin token : {token}</Text>
      <TouchableOpacity
        onPress={() => logout()}
        className="bg-white h-10 flex items-center justify-center w-full rounded-lg shadow">
        <Text>logout</Text>
      </TouchableOpacity>

      {/* // gorhom  */}
      <TouchableOpacity className="bg-white h-10 flex items-center justify-center w-full rounded-lg shadow">
        <Button
          onPress={() => setBottomSheetVisible(true)}
          title="Modal gorhom bottom sheet"
          color="black"
        />
      </TouchableOpacity>

      <BottomSheetCustom
        isVisible={isBottomSheetVisible}
        onClose={handleCloseBottomSheet}>
        <View className="p-5 gap-y-5">
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetCustom>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Menu;
