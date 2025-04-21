import { router } from "expo-router";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
};

export default function HeaderWithBack({ title }: Props) {
  return (
    <View className=" bg-white border-b h-20 flex flex-row items-center justify-center  w-full ">
      {/* Tombol Back */}
      <Pressable
        className=" bg-slate-100 absolute left-5 flex items-center justify-center rounded-2xl"
        onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={40} color="black" />
      </Pressable>

      {/* Judul Tengah */}

      <Text className="font-mono uppercase mb-0 border text-xl ">{title}</Text>
    </View>
  );
}
