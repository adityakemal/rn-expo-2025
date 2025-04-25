// components/Button.js
import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonCustom = ({
  title = "",
  onPress = () => {},
  className = "",
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      // Gabungkan kelas default dengan kelas tambahan dari prop className
      className={clsx(
        "bg-yellow-400 rounded-md justify-center items-center shadow-hard-2",
        disabled && "opacity-50",
        className
      )}>
      <Text className="text-white text-lg font-semibold font-gilroy-bold uppercase tracking-wider">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
