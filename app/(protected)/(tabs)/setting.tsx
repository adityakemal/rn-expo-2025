import { useAuth } from "@/stores/auth";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Setting = () => {
  const router = useRouter();
  const { token, logout } = useAuth();
  return (
    <View>
      <Text>Setting</Text>
      <Text>lollgin token : {token}</Text>
      <TouchableOpacity
        onPress={() => logout()}
        className="bg-white h-10 flex items-center justify-center w-full rounded-lg shadow">
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
