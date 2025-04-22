import { View, Text, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { ArrowLeft, Bell, MagnifyingGlass } from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/lib/theme";
import SearchInput from "./SearchInput";

export default function Header({
  title = "",
  hideBack = false,
  showNotification = true,
  onBack,
}: {
  title?: string;
  hideBack?: boolean;
  showNotification?: boolean;
  onBack?: () => void;
}) {
  const router = useRouter();
  const { top } = useSafeAreaInsets(); // ini tinggi status bar (misal 44 di iOS, 24 di Android)

  const canGoBack = router.canGoBack();
  const shouldShowBack = !hideBack && canGoBack;

  return (
    <View style={{ paddingTop: top }} className="bg-white">
      <View className="flex-row items-center justify-center h-16 ">
        {shouldShowBack && (
          <TouchableOpacity
            onPress={onBack ?? router.back}
            className=" absolute left-5 rounded-lg bg-neutral-100 p-1">
            <ArrowLeft size={27} weight="bold" color={colors.neutral[700]} />
          </TouchableOpacity>
        )}

        <Text className="text-3xl text-neutral-700 uppercase font-gilroy-bold">
          {title}
        </Text>
        {/* <View>

          <SearchInput
            value={search}
            onChangeText={setSearch}
            onDebouncedChange={(val) => {
              console.log("Debounced:", val);
            }}
          />
        </View> */}

        <View className=" absolute right-5 flex-row gap-4 ">
          {showNotification && (
            <TouchableOpacity
              onPress={() => console.log("Notif pressed")}
              className="  rounded-2xl bg-neutral-100 p-1">
              <Bell size={27} weight="bold" color={colors.neutral[700]} />
            </TouchableOpacity>
          )}
          <Link href="/modal-search" asChild>
            <TouchableOpacity
              onPress={() => console.log("Notif pressed")}
              className=" rounded-2xl bg-neutral-100 p-1">
              <MagnifyingGlass
                size={27}
                weight="bold"
                color={colors.neutral[700]}
              />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
