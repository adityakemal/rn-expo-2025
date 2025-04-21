import { useAuth } from "@/stores/auth";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Dashboard = () => {
  const router = useRouter();
  const { token } = useAuth();

  return (
    <View>
      <Text>Dashboard saya</Text>
      <Text>Dashboard saya</Text>
      <Text>Dashboard saya</Text>
      <Text>Dashboard saya</Text>
      <Text>Dashboard saya</Text>
      <Text>Dashboard saya</Text>
      <Link href={"/dashboard/12345"} asChild>
        <Button title="go to detail ssssssss 123456" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
