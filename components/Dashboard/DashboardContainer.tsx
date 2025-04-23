import useDeviceType from "@/hooks/useDeviceType";
import { colors } from "@/lib/theme";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import TransactionChart from "./TransactionChart";

const DashboardContainer = () => {
  const { isTablet } = useDeviceType();

  const [size, setSize] = useState({ width: 0, height: 0 });

  const content = (
    <View className="flex-1 px-2.5 py-5  md:flex-nowrap flex-wrap">
      <View className="flex-1 pb-2.5 basis-1/5  flex-row  md:flex-nowrap flex-wrap">
        {[
          { title: "Cash", value: 300 },
          { title: "Card", value: 300 },
          { title: "Virtual Account", value: 300 },
        ].map((res, i) => (
          <View
            key={i}
            className=" flex-1  p-5 flex-row justify-between mx-2.5"
            style={styles.card}>
            <Text className="text-4xl capitalize font-mono text-neutral-800">
              {res.value}
            </Text>
            <Text className="text-2xl font-gilroy-bold capitalize self-end text-neutral-700">
              {res.title}
            </Text>
          </View>
        ))}
      </View>

      <View className="flex-1 pt-2.5 basis-4/5  flex-row  md:flex-nowrap flex-wrap">
        {/* charts */}
        <View className="flex-1 px-2.5  basis-2/3  gap-y-5 ">
          <View
            className=" flex-1  basis-2/3 relative w-full items-center justify-center bg-neutral-100 rounded-2xl"
            onLayout={(event) => {
              const { width, height } = event.nativeEvent.layout;
              setSize({ width, height });
              console.log("Ukuran View:", width, height);
            }}>
            <View className="w-fit   overflow-hidden ">
              <TransactionChart size={size} />
            </View>
          </View>
          <View className="p-5 flex-1 border basis-2/3 bg-red-300"></View>
        </View>

        <View className="flex-1 px-2.5 basis-1/3  gap-y-5">
          {[
            { title: "Cash", value: 300 },
            { title: "Card", value: 300 },
            { title: "Virtual Account", value: 300 },
            { title: "E-wallet", value: 300 },
          ].map((res, i) => (
            <View
              key={i}
              className=" flex-1  p-5 flex-row justify-between "
              style={styles.card}>
              <Text className="text-4xl capitalize font-mono text-neutral-800">
                {res.value}
              </Text>
              <Text className="text-2xl font-gilroy-bold capitalize self-end text-neutral-700">
                {res.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <>
      {isTablet ? (
        // For tablet, render the content without ScrollView
        <>{content}</>
      ) : (
        // For phone, render the content with ScrollView
        <ScrollView className="flex-1">{content}</ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: colors.neutral[100],
  },
});

export default DashboardContainer;
