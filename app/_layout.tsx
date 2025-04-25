import { useFonts } from "expo-font";
import "@/global.css";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { useAuthStore } from "@/stores/auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useDeviceType from "@/hooks/useDeviceType";
import * as ScreenOrientation from "expo-screen-orientation";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     refetchOnWindowFocus: false, // default: true
  //   },
  // },
});
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useReactQueryDevTools(queryClient);
  const { isPhone } = useDeviceType();

  const { restore } = useAuthStore();

  useEffect(() => {
    restore(); // restore session saat app start
  }, []);

  // LOCK ORIENTATION IF it's PHONE
  useEffect(() => {
    if (isPhone) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    } else {
      ScreenOrientation.unlockAsync(); // allow all orientations
    }
  }, [isPhone]);

  const [loaded] = useFonts({
    GilroyRegular: require("../assets/fonts/Gilroy-Regular.ttf"),
    GilroyLight: require("../assets/fonts/Gilroy-Light.ttf"),
    GilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <GestureHandlerRootView>
            <BottomSheetModalProvider>
              <StatusBar style="dark" />
              {/* <Slot /> */}
              <Slot screenOptions={{ headerShown: true }}>
                {/* <Stack.Screen name="login" options={{ headerShown: false }} /> */}
                {/* <Stack.Screen
                  name="(protected)"
                  options={{ headerShown: false, title: "" }}
                /> */}
                {/* <Stack.Screen
                  name="modal"
                  options={{
                    headerShown: true,
                    presentation: "modal",
                    title: "Modal aja",
                  }}
                />
                <Stack.Screen
                  name="flash-list-test"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="image-shared"
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="+not-found" /> */}
              </Slot>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </>
  );
}
