import React from "react";
import { View, Text, TextInput } from "react-native";

// Komponen InputCustom menerima props seperti label, ikon, dan lainnya
const InputCustom = ({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  secureTextEntry = false,
  keyboardType = "default",
  maxLength = 100,
}: any) => {
  return (
    <View className="mb-6">
      {/* Label */}
      <Text className="text-neutral-700 text-base font-medium mb-2">
        {label}
      </Text>

      <View className="flex-row border border-neutral-300 rounded-xl bg-neutral-50 p-0 h-14 flex justify-center items-center">
        {/* Ikon di kiri */}
        <View className="ml-4 mr-3 justify-center items-center">{icon}</View>

        {/* TextInput */}
        <TextInput
          className="flex-1 text-lg text-neutral-800 bg-transparent leading-tight border-0 p-0 m-0 flex-row items-center justify-center "
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#9ca3af"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

export default InputCustom;
