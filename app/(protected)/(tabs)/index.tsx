import ContainerWrapper from "@/components/ContainerWrapper";
import CategoryList from "@/components/Menu/CategoryList";
import MenuList from "@/components/Menu/MenuList";
import BottomSheetCustom from "@/components/ui/BottomSheetCustom";
import { fontSize } from "@/lib/util";
import { useAuth } from "@/stores/auth";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Menu = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleCloseBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <ContainerWrapper title="Menu" hideBack className="">
      <CategoryList />
      <MenuList />
    </ContainerWrapper>
  );
};

export default Menu;
