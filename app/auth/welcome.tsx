import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FinFlow</Text>

      <Text style={styles.subtitle}>Manage your finances with ease</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
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
    marginBottom: 60,
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#00D09E",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: 200,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: 200,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00D09E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signupButtonText: {
    color: "#00D09E",
    fontSize: 18,
    fontWeight: "bold",
  },
});
