import ContainerWrapper from "@/components/ContainerWrapper";
import DashboardContainer from "@/components/Dashboard/DashboardContainer";
import CategoryList from "@/components/Menu/CategoryList";
import MenuList from "@/components/Menu/MenuList";
import { useAuthStore } from "@/stores/auth";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Dashboard = () => {
  const router = useRouter();
  const { token } = useAuthStore();

  return (
    <ContainerWrapper title="Dashboard">
      <DashboardContainer />
      <Text>{token}</Text>
      <Text>{token} saya</Text>
      <Text>{token} saya</Text>
      <Text>{token} saya</Text>
      <Text>{token} saya</Text>
      <Text>{token} saya</Text>
      <Link href={"/dashboard/12345"} asChild>
        <Button title="go to detail ssssssss 123456" />
      </Link>
      <Text>okegas</Text>
    </ContainerWrapper>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
