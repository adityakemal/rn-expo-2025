import { fontSize } from "@/lib/util";
import React from "react";
import { View, Text } from "react-native";

export default function TextSize() {
  return (
    <View>
      <Text className="text-4xl font-mono font-bold">
        Test Font Hello World! mono
      </Text>
      <Text className="text-4xl font-gilroy">
        Test Font Hello World! golroy
      </Text>
      <Text className="text-4xl text-red-500 font-bold font-gilroy ">
        Test Font Hello World! default
      </Text>
      <Text className="" style={{ fontSize: fontSize.xl }}>
        Test Font Hello World! default
      </Text>
      <Text className=" text-sm">Test Font Hello World! default</Text>
    </View>
  );
}
