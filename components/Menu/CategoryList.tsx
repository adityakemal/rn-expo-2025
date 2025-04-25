import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// import { useCategories } from "@/api/useMenuApi";
import clsx from "clsx";
import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useMenuStores } from "@/stores/menu";
import { useGetCategory } from "@/api/useMenuApi";

export default function CategoryList() {
  const { data: categories, isLoading, isError } = useGetCategory();

  if (isError)
    return <Text className="px-4 text-red-500">Failed to load categories</Text>;

  const scrollRef = useRef<ScrollView>(null);

  const { activeCategory, setActiveCategory } = useMenuStores();

  const handlePress = (index: number, id: string) => {
    setActiveCategory(id);
    const scrollToX = index * 100 - 160; // 100 = item width approx, 160 = center offset
    scrollRef.current?.scrollTo({ x: Math.max(0, scrollToX), animated: true });
  };

  return (
    <View className="">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ flexDirection: "row", paddingHorizontal: 20 }}
        className="px-5 py-4"
        ref={scrollRef}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <View key={index} className="mr-5 items-center bg-white ">
                <View className="w-16 h-16 rounded-full bg-slate-200 mb-1 shadow-sm" />
                <View className="w-12 h-3 rounded bg-slate-200" />
              </View>
            ))
          : categories?.map((category: any, idx: number) => {
              const isActiveMenu = activeCategory === category.strCategory;
              return (
                <TouchableOpacity
                  onPress={() => handlePress(idx, category.strCategory)}
                  key={category.idCategory}
                  className="items-center mr-5 bg-white ">
                  <Animated.View
                    entering={FadeInDown.delay(100 * idx).springify()}
                    className={clsx(
                      " z-1 h-16 w-16 rounded-full mb-1  overflow-hidden  flex items-center justify-center border bg-inherit border-neutral-200 ",
                      isActiveMenu && "border-4 border-yellow-300   "
                    )}>
                    <Image
                      source={{ uri: category.strCategoryThumb }}
                      contentFit="cover"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                      //   transition={200 * idx}
                    />
                  </Animated.View>
                  <Animated.Text
                    entering={FadeInDown.delay(100 * idx).springify()}
                    className={clsx(
                      "text-sm text-center",
                      isActiveMenu && "font-bold color-black",
                      !isActiveMenu && "font-normal color-neutral-500"
                    )}>
                    {category.strCategory}
                  </Animated.Text>
                </TouchableOpacity>
              );
            })}
      </ScrollView>
    </View>
  );
}
