import { useWindowDimensions, Platform } from "react-native";

export default function useDeviceType() {
  const { width, height } = useWindowDimensions();
  const shortestSide = Math.min(width, height);

  const isWeb = Platform.OS === "web";
  const isTablet = !isWeb && shortestSide >= 768;
  const isPhone = !isWeb && shortestSide < 768;

  return {
    isTablet,
    isPhone,
    isWeb,
  };
}
