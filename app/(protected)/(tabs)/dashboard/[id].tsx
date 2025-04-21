import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Detail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text className="p-5 text-2xl">{id}</Text>
      <Text className="p-5 text-2xl">{id}</Text>
      <Text className="p-5 text-2xl">{id}</Text>
      <Text className="p-5 text-2xl">{id}</Text>
      <Text className="p-5 text-2xl">{id}</Text>
      <Text className="p-5 text-2xl">{"id"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Detail;
