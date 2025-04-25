import ContainerWrapper from "@/components/ContainerWrapper";
import CategoryList from "@/components/Menu/CategoryList";
import MenuList from "@/components/Menu/MenuList";
import React, { useState } from "react";
import { Text, View } from "react-native";

const Menu = () => {
  return (
    <ContainerWrapper title="Menu" hideBack className="" headerShown={false}>
      <View className="flex-row flex-1 gap-5 p-5">
        <View className="basis-4/6 rounded-xl flex-1 gap-5 border">
          <MenuList />
        </View>
        <View className="basis-2/6 flex-1 border p-5">
          <Text className="border">Yes</Text>
        </View>
      </View>
    </ContainerWrapper>
  );
};

export default Menu;
