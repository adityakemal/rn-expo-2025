import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useAuth } from "@/stores/auth";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    // Simulasi: token didapat dari API
    const fakeToken = "1234567890";
    login(fakeToken);
    router.replace("/");
  };

  return (
    <View className="flex-1 items-center justify-center gap-y-5">
      <Button title="Login" onPress={handleLogin} />
      {/* <Link href="/another-protected" asChild push>
        <Button title="Another protected route" />
      </Link> */}
      {/* text */}
      {/* modal expo */}
      <Link
        href="/modal"
        asChild
        push
        className="p-3 border rounded-lg text-center">
        <Text>Open Modal</Text>
      </Link>
      <Link
        href="/text-size"
        asChild
        push
        className="p-3 border rounded-lg text-center">
        <Text>Responsive TextSize & Font Family</Text>
      </Link>
      {/* flashlist */}
      <Link
        href="/flash-list-test"
        asChild
        push
        className="p-3 border rounded-lg text-center">
        <Text>FlashList & react-query</Text>
      </Link>
      {/* shared image  */}
      <Link
        href="/image-shared"
        asChild
        push
        className="p-3 border rounded-lg text-center">
        <Text>shared image transition</Text>
      </Link>
    </View>
  );
}
