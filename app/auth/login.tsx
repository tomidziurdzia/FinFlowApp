import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScreenWrapper title="Welcome">
      <View style={styles.contentCard}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="example@example.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.textInput, styles.passwordInput]}
              placeholder="Enter your password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            ></TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPasswordLink}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push("/auth/welcome")}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.separator}>
          <Text style={styles.separatorText}>or sign up with</Text>
        </View>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>G</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accountLinkContainer}>
          <Text style={styles.accountLinkText}>
            Don&apos;t have an account?{" "}
            <Text
              style={styles.accountLinkHighlight}
              onPress={() => router.push("/auth/welcome")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  contentCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 30,
    marginTop: -20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e1e5e9",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 14,
  },
  loginButton: {
    backgroundColor: "#00D09E",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordLink: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#666",
    fontSize: 14,
  },
  signupButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00D09E",
    marginBottom: 20,
  },
  signupButtonText: {
    color: "#00D09E",
    fontSize: 18,
    fontWeight: "bold",
  },
  fingerprintContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  fingerprintText: {
    color: "#666",
    fontSize: 14,
  },
  fingerprintHighlight: {
    color: "#007AFF",
    fontWeight: "600",
  },
  separator: {
    alignItems: "center",
    marginBottom: 20,
  },
  separatorText: {
    color: "#999",
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e1e5e9",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
  },
  accountLinkContainer: {
    alignItems: "center",
  },
  accountLinkText: {
    color: "#666",
    fontSize: 14,
  },
  accountLinkHighlight: {
    color: "#007AFF",
    fontWeight: "600",
  },
});
