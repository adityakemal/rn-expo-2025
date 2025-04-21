import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import image from "../../assets/images/partial-react-logo.png";
const IMAGE = Image.resolveAssetSource(image).uri;
export default function ImageShared() {
  const router = useRouter();
  return (
    <>
      <View>
        {/* <Link className=" " href={{ pathname: "" }} asChild> */}
        <Pressable
          className="w-fit"
          onPress={() => router.push("/image-shared/detail")}>
          <Animated.Image
            sharedTransitionTag="tag-1234"
            source={{ uri: IMAGE }}
            style={{ width: 100, height: 100 }}
            //   placeholder={{ blurhash }}
            //   placeholder={require('../assets/placeholder.png')} // ← gambar default kecil
            //   contentFit="cover"
          />
        </Pressable>
        {/* </Link> */}
      </View>
    </>
  );
}
