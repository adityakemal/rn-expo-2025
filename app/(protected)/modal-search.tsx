import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withDelay,
} from "react-native-reanimated"; // Import Animated dari reanimated
import SearchInput from "@/components/SearchInput"; // Pastikan SearchInput sudah sesuai dengan kebutuhan

const ModalSearch = () => {
  const router = useRouter();
  const { top } = useSafeAreaInsets(); // ini tinggi status bar (misal 44 di iOS, 24 di Android)
  const [search, setSearch] = useState("");
  const screenWidth = Dimensions.get("window").width;

  // Gunakan useSharedValue untuk nilai lebar yang bisa dianimasikan
  const translateX = useSharedValue(screenWidth - 70); // Dimulai dengan 'fit-content' atau 'auto'

  // Animasi untuk memperlebar search input
  const expandSearchInput = () => {
    translateX.value = withDelay(500, withTiming(0, { duration: 700 })); // widthscreen to 0
  };

  // Efek animasi untuk lebar SearchInput
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // Jalankan animasi saat modal pertama kali muncul
  useEffect(() => {
    expandSearchInput(); // Aktifkan animasi saat modal dibuka
  }, []);

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      edges={["bottom"]}
      style={{ paddingTop: top }}>
      <View className="h-16  flex-row justify-end items-center w-full overflow-hidden">
        {/* Wrap SearchInput dengan Animated.View dari reanimated */}
        <Animated.View
          style={[animatedStyle]}
          //   style={{
          //     opacity: 0.8,
          //     transform: [{ translateX: screenWidth - 70 }],
          //   }}
          className="px-5 w-full ">
          <SearchInput
            value={search}
            onChangeText={setSearch}
            onDebouncedChange={(val) => {
              console.log("Debounced:", val);
            }}
          />
        </Animated.View>
      </View>

      {/* <Text className="text-center mt-5">Modal search</Text> */}

      <TouchableOpacity onPress={() => router.back()} className="border p-5">
        <Text>Close</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ModalSearch;
