import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import * as Icon from "phosphor-react-native";
import { colors, fontSize } from "@/lib/theme";
import { useOrientation } from "@/hooks/useOrientation";

export const unstable_settings = {
  //kalo pake deeplink ke tab tertentu bisa back
  initialRouteName: "index",
};

export default function TabLayout() {
  const { isLandscape } = useOrientation();
  const _iconSize = isLandscape ? 32 : 27;
  const _focusedColor = colors.yellow[300];
  const _bgColor = colors.neutral[800];
  const tabItems = [
    {
      name: "index",
      badge: 0,
      label: "Menu",
      icon: (focused: boolean, color: any) => (
        <Icon.Pepper
          weight={focused ? "fill" : "regular"}
          size={_iconSize}
          color={color}
        />
      ),
    },
    {
      name: "dashboard",
      badge: 0,
      label: "Dashboard",
      icon: (focused: boolean, color: any) => (
        <Icon.ChartBar
          weight={focused ? "fill" : "regular"}
          size={_iconSize}
          color={color}
        />
      ),
    },
    {
      name: "bill",
      badge: 10,
      label: "Open Bill",
      icon: (focused: boolean, color: any) => (
        <Icon.Invoice
          weight={focused ? "fill" : "regular"}
          size={_iconSize}
          color={color}
        />
      ),
    },
    {
      name: "history",
      badge: 0,
      label: "History",
      icon: (focused: boolean, color: any) => (
        <Icon.ClockCountdown
          weight={focused ? "fill" : "regular"}
          size={_iconSize}
          color={color}
        />
      ),
    },
    {
      name: "setting",
      badge: 0,
      label: "Settings",
      icon: (focused: boolean, color: any) => (
        <Icon.GearSix
          weight={focused ? "fill" : "regular"}
          size={_iconSize}
          color={color}
        />
      ),
    },
  ];

  return (
    <Tabs
      backBehavior="order"
      screenOptions={{
        tabBarActiveTintColor: _focusedColor,
        tabBarInactiveTintColor: colors.neutral[200],
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // height: 80,
            // paddingBottom: 20,
            paddingTop: 10,
            backgroundColor: _bgColor,
            marginTop: 0,
            position: "absolute", //ios remove tab padding
            elevation: 0, //ios remove tab padding
          },
          android: {
            height: 75,
            backgroundColor: _bgColor,
          },
          default: {},
        }),
      }}>
      {tabItems.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: item.label,
            headerShown: false,
            // title: "",
            // href:null, //hide
            tabBarBadge: item.badge !== 0 ? item.badge : undefined,
            tabBarBadgeStyle: {
              // fontSize: fontSize.sm,
              top: -10,
              backgroundColor: "tomato",
              color: "white",
              borderRadius: 6,
            },
            popToTopOnBlur: true, // if clicked back to main tab event in nested path of tab
            tabBarIcon: ({ focused, color, size }) => {
              return item.icon(focused, color);
            },
          }}
        />
      ))}
    </Tabs>
  );
}
