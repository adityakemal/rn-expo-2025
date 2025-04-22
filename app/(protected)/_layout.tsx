import { useAuth } from "@/stores/auth";
import { Redirect, Slot, Stack } from "expo-router";
import React from "react";

export default function ProtectedLayout() {
  const { token } = useAuth();

  if (!token) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="modal-search"
        options={{
          presentation: "card",
          animation: "fade",
        }}
      />
    </Stack>
  );
}
