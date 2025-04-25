import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Animated from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
// import { SharedImage } from "@/components/SharedImage";

export default function detail() {
  const router = useRouter();
  const { image } = useLocalSearchParams();
  return (
    <BlurView intensity={40}>
      <View>
        {/* <Animated.Image
          //   placeholder={{ blurhash }}
          sharedTransitionTag="tag-1234"
          //   placeholder={require('../assets/placeholder.png')} // ← gambar default kecil
          source={require("../../assets/images/partial-react-logo.png")}
          style={{ width: 300, height: 300 }}
          //   contentFit="cover"
        /> */}
        {/* <SharedImage
          sharedId={`product-123`}
          source={{ uri: image as string }}
          style={{ width: 300, height: 300, borderRadius: 16 }}
        /> */}
        <Animated.Image
          source={require("../../assets/images/icon.png")}
          sharedTransitionTag={`image-${123}`}
          style={{ width: 300, height: 300, borderRadius: 12 }}
        />
      </View>
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </BlurView>
  );
}
