import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import { useMenuStores } from "@/stores/menu";
import { useMenus } from "@/api/useMenuApi";
import { useOrientation } from "@/hooks/useOrientation";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import useDeviceType from "@/hooks/useDeviceType";
import clsx from "clsx";

export default function MenuList() {
  const { activeCategory } = useMenuStores();
  const { data: menus, isLoading, isError } = useMenus(activeCategory);
  const { isLandscape } = useOrientation();
  const { isPhone } = useDeviceType();

  if (isLoading)
    return (
      <FlashList
        data={[...Array(10).keys()]} // Render 10 skeleton items
        estimatedItemSize={200}
        numColumns={isPhone ? 3 : isLandscape ? 7 : 4}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        keyExtractor={(item) => item.toString()}
        renderItem={() => (
          <View style={{ margin: 10 }}>
            <View className="w-full aspect-square mb-1 overflow-hidden rounded-xl bg-gray-200 animate-pulse" />
            <View
              className={clsx(
                "h-5 bg-gray-200 rounded mt-2 animate-pulse",
                isPhone ? "w-3/4" : "w-full"
              )}
            />
          </View>
        )}
      />
    );
  if (isError)
    return <Text className="text-center mt-4">Failed to load menus</Text>;

  return (
    <FlashList
      data={menus}
      estimatedItemSize={200}
      numColumns={isPhone ? 3 : isLandscape ? 7 : 4}
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 10 }}
      keyExtractor={(item: any) => item.idMeal}
      // showsVerticalScrollIndicator={false}

      className=""
      renderItem={({ item }) => (
        <View className="" style={{ margin: 10 }}>
          <TouchableOpacity className="w-full aspect-square rounded-xl overflow-hidden ">
            <Image
              //   placeholder={{ blurhash }}
              // sharedTransitionTag="prodImageTransTag"
              //   placeholder={require('../assets/placeholder.png')} // ← gambar default kecil
              key={item.idMeal}
              source={{ uri: item.strMealThumb }}
              style={{ width: "100%", height: "100%" }}
              contentFit="contain"
              transition={700}
            />
          </TouchableOpacity>

          <Text
            numberOfLines={2}
            className={clsx(
              " text-neutral-800 font-gilroy mt-1",
              isPhone && "text-base",
              !isPhone && "text-xl"
            )}>
            {item.strMeal}
          </Text>
        </View>
      )}
    />
  );
}
