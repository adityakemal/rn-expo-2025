import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

export const unstable_settings = {
  //kalo pake deeplink ke tab tertentu bisa back
  initialRouteName: "index",
};

export default function TabLayout() {
  const tabItems = [
    {
      name: "index",
      label: "Menu",
      iconActive: <AntDesign name="appstore1" size={24} />,
      iconInActive: <AntDesign name="appstore-o" size={24} />,
    },
    {
      name: "dashboard",
      label: "Dashboard",
      iconActive: <AntDesign name="appstore1" size={24} />,
      iconInActive: <AntDesign name="appstore-o" size={24} />,
    },
    {
      name: "bill",
      label: "Bill",
      iconActive: <AntDesign name="appstore1" size={24} />,
      iconInActive: <AntDesign name="appstore-o" size={24} />,
    },
    {
      name: "history",
      label: "History",
      iconActive: <AntDesign name="appstore1" size={24} />,
      iconInActive: <AntDesign name="appstore-o" size={24} />,
    },
    {
      name: "setting",
      label: "Setting",
      iconActive: <AntDesign name="appstore1" size={24} />,
      iconInActive: <AntDesign name="appstore-o" size={24} />,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        backBehavior="order"
        screenOptions={{
          tabBarActiveTintColor: "teal",
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              height: 70,
              paddingBottom: 10,
              paddingTop: 10,
            },
            android: {
              height: 70,
              paddingBottom: 10,
              paddingTop: 10,
            },
            default: {},
          }),
          tabBarIconStyle: {
            marginTop: 0,
          },
        }}>
        {tabItems.map((item) => (
          <Tabs.Screen
            key={item.name}
            name={item.name}
            options={{
              title: item.label,
              // title: "",
              // href:null, //hide
              tabBarBadge: 2,
              popToTopOnBlur: true, // if clicked back to main tab event in nested path of tab
              tabBarIcon: ({ focused, color, size }) => {
                return focused ? item.iconActive : item.iconInActive;
              },
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}
