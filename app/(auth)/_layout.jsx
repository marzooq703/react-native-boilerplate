import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: true }} />
      <Stack.Screen name="sign-up" options={{ headerShown: true }} />
      <Stack.Screen name="email-verification" options={{ headerShown: true }} />
      <Stack.Screen name="verify-otp" options={{ headerShown: true }} />
      <Stack.Screen name="reset-password" options={{ headerShown: true }} />
    </Stack>
  );
}
