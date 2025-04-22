import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "./Header";
import { Text, View } from "react-native";
import clsx from "clsx";
import useDeviceType from "@/hooks/useDeviceType";

export default function ContainerWrapper({
  children,
  className,
  headerShown = true,
  title,
  hideBack = false,
  showNotification = true,
  onBack,
}: {
  children: React.ReactNode;
  className?: string;
  headerShown?: boolean;
  title?: string;
  withPaddingBottom?: boolean;
  hideBack?: boolean;
  showNotification?: boolean;
  onBack?: () => void;
}) {
  const { top, bottom } = useSafeAreaInsets(); // ini tinggi status bar (misal 44 di iOS, 24 di Android)

  return (
    <SafeAreaView
      edges={["bottom"]}
      className="flex-1 bg-white"
      style={{
        paddingBottom: bottom,
      }}>
      <View className={clsx("flex-1", className)}>
        {headerShown && (
          <Header
            title={title}
            hideBack={hideBack}
            showNotification={showNotification}
            onBack={onBack}
          />
        )}
        {children}
      </View>
    </SafeAreaView>
  );
}
