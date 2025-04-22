// import { SharedImage } from "@/components/SharedImage";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

export default function ImageShared() {
  const router = useRouter();
  const url =
    "https://fastly.picsum.photos/id/791/536/354.jpg?hmac=eXUPs7QLTn9HF78YkhAz85vtEsUXj2aePprZoTCwCdU";
  return (
    <>
      <View>
        <Link
          className=" "
          href={{ pathname: "/image-shared/detail", params: { image: url } }}
          asChild>
          <Pressable
            className="w-fit"
            //   onPress={() => router.push("/image-shared/detail")}
          >
            {/* <Animated.Image
              sharedTransitionTag="tag-1234"
              source={require("../../assets/images/partial-react-logo.png")}
              style={{ width: 100, height: 100 }}
              //   placeholder={{ blurhash }}
              //   placeholder={require('../assets/placeholder.png')} // ← gambar default kecil
              //   contentFit="cover"
            /> */}
            {/* <SharedImage
              sharedId={`product-123`}
              source={{ uri: url }}
              style={{ width: 150, height: 150, borderRadius: 12 }}
            /> */}
            <Animated.Image
              source={require("../../assets/images/partial-react-logo.png")}
              sharedTransitionTag={`image-${123}`}
              style={{ width: 150, height: 150, borderRadius: 12 }}
            />
          </Pressable>
        </Link>
      </View>
    </>
  );
}
