import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { Envelope, Key } from "phosphor-react-native";
import InputCustom from "../ui/InputCustom"; // Import komponen InputCustom
import ButtonCustom from "../ui/ButtonCustom";
import { usePostLogin } from "@/api/useAuthApi";
import { useRouter } from "expo-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const router = useRouter();
  const { mutate, isError, error, isPending, isSuccess } = usePostLogin();
  const handleLogin = () => {
    if (!email || !pin) {
      Alert.alert("Error", "Email dan PIN harus diisi.");
      return;
    }
    // Alert.alert("Login Data", `Email: ${email}\nPIN: ${pin}`);
    // console.log("Email:", email);
    // console.log("PIN:", pin);

    mutate({ email, pin });
  };

  useEffect(() => {
    if (isSuccess) {
      // Jika login berhasil, navigasikan ke halaman lain
      router.replace("/"); // Ganti dengan rute yang sesuai
    }
  }, [isSuccess, router]);

  return (
    <View>
      <Text className="text-4xl mb-0 font-gilroy-bold text-neutral-600">
        Welcome back!
      </Text>
      <Text className="text-sm mb-8 text-neutral-500">
        Sign in to your cashier account
      </Text>

      {/* Input Email */}
      <InputCustom
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Masukkan email Anda"
        icon={<Envelope color="#9ca3af" size={24} />}
        keyboardType="email-address"
      />

      {/* Input PIN */}
      <InputCustom
        label="PIN"
        value={pin}
        onChangeText={setPin}
        placeholder="Masukkan PIN Anda"
        icon={<Key color="#9ca3af" size={24} />}
        secureTextEntry
        maxLength={6}
        keyboardType="number-pad"
      />

      {/* Button Login */}
      <ButtonCustom
        title={isPending ? "Loading..." : "Sign in"}
        onPress={handleLogin}
        disabled={isPending}
        className="w-full py-4 !rounded-full"
      />

      {/* Lupa PIN link */}
      <Text className="text-center text-blue-600 mt-6 text-base">
        Lupa PIN?
      </Text>
    </View>
  );
};

export default LoginForm;
