import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Animated from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Link, useRouter } from "expo-router";
import image from "../../assets/images/partial-react-logo.png";

const IMAGE = Image.resolveAssetSource(image).uri;

export default function detail() {
  const router = useRouter();
  return (
    <BlurView intensity={40}>
      <View>
        <Animated.Image
          //   placeholder={{ blurhash }}
          sharedTransitionTag="tag-1234"
          //   placeholder={require('../assets/placeholder.png')} // ← gambar default kecil
          source={{ uri: IMAGE }}
          style={{ width: 300, height: 300 }}
          //   contentFit="cover"
        />
      </View>
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </BlurView>
  );
}
