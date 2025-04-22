import React, { useCallback, useEffect, useRef, useState } from "react";
import { TextInput, View, Pressable } from "react-native";
import { MagnifyingGlass, X } from "phosphor-react-native";
import { useDebounce } from "@/hooks/useDebounce"; // bikin custom hook debounce ya
import { colors } from "@/lib/theme";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  debounceDelay?: number;
  onDebouncedChange?: (text: string) => void;
};

export default function SearchInput({
  value,
  onChangeText,
  placeholder = "Search...",
  debounceDelay = 300,
  onDebouncedChange,
}: Props) {
  const [input, setInput] = useState(value);
  const debounced = useDebounce(input, debounceDelay);

  const textInputRef = useRef<TextInput | null>(null); // Menambahkan ref untuk TextInput

  useEffect(() => {
    onDebouncedChange?.(debounced);
  }, [debounced]);

  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleClear = () => {
    setInput("");
    onChangeText("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      textInputRef.current?.focus(); // Fokus pada TextInput setelah 1000ms
    }, 1000);

    // Bersihkan timer saat komponen dibersihkan
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-row items-center py-2 bg-white rounded-xl  border-gray-300">
      <View className="p-1">
        <MagnifyingGlass size={27} weight="bold" color={colors.neutral[700]} />
      </View>
      <Animated.View
        entering={FadeIn.duration(1000).delay(700)}
        className="flex-1"
        // exiting={FadeOut.duration(3000)}
      >
        <TextInput
          ref={textInputRef} // Menambahkan ref ke TextInput
          placeholder={placeholder}
          focusable
          value={input}
          onChangeText={(text) => {
            setInput(text);
            onChangeText(text);
          }}
          className="flex-1 px-4 font-gilroy text-neutral-800 w-full"
          placeholderTextColor="#9ca3af"
        />
      </Animated.View>
      {input.length > 0 && (
        <Pressable onPress={handleClear} className="p-1">
          <X size={27} color="#9ca3af" />
        </Pressable>
      )}
    </View>
  );
}
