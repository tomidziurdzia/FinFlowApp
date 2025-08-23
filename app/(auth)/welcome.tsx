import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { FormButton } from "@/components/auth";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FinFlow</Text>

      <Text style={styles.subtitle}>Manage your finances with ease</Text>

      <View style={styles.buttonsContainer}>
        <FormButton
          title="Log In"
          onPress={() => router.push("/(auth)/sign-in")}
          variant="primary"
          fullWidth={true}
        />

        <FormButton
          title="Sign Up"
          onPress={() => router.push("/(auth)/sign-up")}
          variant="secondary"
          fullWidth={true}
        />
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00D09E",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
  },
});
