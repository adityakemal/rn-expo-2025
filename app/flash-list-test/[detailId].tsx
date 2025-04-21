import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailProduct() {
  const { detailId, id, image } = useLocalSearchParams<any>();

  const fetchProductDetail = async (id: string | number) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product detail");
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", detailId],
    queryFn: () => fetchProductDetail(detailId!),
    enabled: !!detailId, // supaya tidak jalan kalau id belum tersedia
  });

  return (
    <ScrollView className="p-5">
      <View className="w-full aspect-square border-b ">
        <Animated.Image
          //   placeholder={{ blurhash }}
          //   placeholder={require('../assets/placeholder.png')} // ← gambar default kecil
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
          //   contentFit="cover"
        />
      </View>
      <Text>{JSON.stringify(detailId, null, 2)}</Text>
      <Text>{JSON.stringify(id, null, 2)}</Text>
      <Text>{JSON.stringify(image, null, 2)}</Text>
    </ScrollView>
  );
}
