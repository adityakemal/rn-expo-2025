// import { View, Text, TextInput, Button } from "react-native";
// import { useState } from "react";
// import { useAuth } from "@/stores/auth";
// import { Link, useRouter } from "expo-router";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const { login } = useAuth();
//   const router = useRouter();

//   const handleLogin = async () => {
//     // Simulasi: token didapat dari API
//     const fakeToken = "1234567890";
//     login(fakeToken);
//     router.replace("/");
//   };

//   return (
//     <View className="flex-1 items-center justify-center gap-y-5">
//       <Button title="Login" onPress={handleLogin} />
//       {/* <Link href="/another-protected" asChild push>
//         <Button title="Another protected route" />
//       </Link> */}
//       {/* text */}
//       {/* modal expo */}
//       <Link
//         href="/modal"
//         asChild
//         push
//         className="p-3 border rounded-lg text-center">
//         <Text>Open Modal</Text>
//       </Link>
//       <Link
//         href="/text-size"
//         asChild
//         push
//         className="p-3 border rounded-lg text-center">
//         <Text>Responsive TextSize & Font Family</Text>
//       </Link>
//       {/* flashlist */}
//       <Link
//         href="/flash-list-test"
//         asChild
//         push
//         className="p-3 border rounded-lg text-center">
//         <Text>FlashList & react-query</Text>
//       </Link>
//       {/* shared image  */}
//       <Link
//         href="/image-shared"
//         asChild
//         push
//         className="p-3 border rounded-lg text-center">
//         <Text>shared image transition</Text>
//       </Link>
//     </View>
//   );
// }

// screens/LoginScreen.js (atau di mana pun kamu meletakkan layar ini)
import LoginForm from "@/components/Auth/LoginForm";
import ButtonCustom from "@/components/ui/ButtonCustom";
import useDeviceType from "@/hooks/useDeviceType";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const { isPhone } = useDeviceType();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 flex-row  relative">
        <View className="absolute top-0 md:top-5 left-10 h-[6%] lg:h-[10%] aspect-square md:aspect-[16/6] z-10">
          <Image
            source={
              isPhone
                ? require("../assets/images/icon.png")
                : require("../assets/images/balesinLogo.png")
            } // Ganti dengan URL gambarmu
            style={{
              width: "100%",
              height: "100%",
            }}
            contentFit="contain"
          />
        </View>
        <View className="flex-1 flex-row items-center justify-center  hidden lg:flex  ">
          <View className=" w-5/6 aspect-square">
            <Image
              source={require("../assets/images/loginImage.webp")} // Ganti dengan URL gambarmu
              // className="w-full h-full"
              style={{ width: "100%", height: "100%" }}
              contentFit="contain"
            />
          </View>
        </View>
        <KeyboardAvoidingView
          className="flex-1 items-center justify-center"
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View className="w-full md:w-4/6 bg-white p-10 md:p-5  mb-5 ">
            <LoginForm />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
