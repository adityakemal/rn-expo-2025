import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useCallback, useMemo } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useOrientation } from "@/hooks/useOrientation";
import Animated, { FadeIn } from "react-native-reanimated";
import { Link } from "expo-router";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

// Komponen item
const ProductItem = React.memo(({ title, price, image, desc, id }: any) => {
  return (
    <View
      // entering={FadeIn.duration(700).delay(100 * parseInt(id))}
      className=" border  rounded-xl overflow-hidden"
      style={{ margin: 10 }}>
      <Link
        href={{
          pathname: `/flash-list-test/${id}` as any,
          params: { id, image },
        }}
        asChild>
        <TouchableOpacity className="w-full aspect-square border-b ">
          <Image
            placeholder={{ blurhash }}
            // sharedTransitionTag="prodImageTransTag"
            //   placeholder={require('../assets/placeholder.png')} // ← gambar default kecil
            key={`${id}-${image}`}
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
            //   contentFit="cover"
          />
        </TouchableOpacity>
      </Link>
      <View className="p-2 gap-y-2">
        {/* <Text numberOfLines={2}>{id}</Text> */}
        <Text numberOfLines={2} className=" font-mono">
          {title}
        </Text>
        <Text className="">${price.toFixed(2)}</Text>
        <Text className=" font-gilroy text-sm text-neutral-700">{desc}</Text>
      </View>
    </View>
  );
});

export default function FlashlistTest() {
  const { isLandscape } = useOrientation();
  const limit = 10;

  const query = useInfiniteQuery({
    queryKey: ["products"],
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (pageParam - 1) * limit
        }`
      );
      const data = await res.json();

      return {
        products: data.products,
        nextPage: data.total > pageParam * limit ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const allItems = useMemo(() => {
    return query.data?.pages.flatMap((page) => page.products) || [];
  }, [query.data?.pages]);

  const renderItem = useCallback(
    ({ item }: any) => (
      <ProductItem
        id={item.id}
        title={item.title}
        price={item.price}
        image={item.thumbnail}
        desc={item.description}
      />
    ),
    []
  );

  return (
    <View className="flex-1 bg-white">
      <MasonryFlashList
        data={allItems}
        renderItem={renderItem}
        keyExtractor={(item: any) => item?.id?.toString()}
        estimatedItemSize={200}
        onEndReached={() => {
          if (query.hasNextPage) {
            query.fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          query.isFetchingNextPage || query.isLoading ? (
            <ActivityIndicator />
          ) : null
        }
        numColumns={isLandscape ? 5 : 2}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}
