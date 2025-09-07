import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useSignIn } from "@clerk/clerk-expo";
import {
  GoogleSignInButton,
  CustomButton,
  CustomInput,
  CustomLink,
} from "@/components/auth";

const SignInScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    if (!emailAddress || !password) {
      Alert.alert("Error", "Please complete all fields");
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(home)");
      } else {
        Alert.alert("Error", "Sign in incomplete");
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      Alert.alert("Error", err.errors?.[0]?.message || "Error signing in");
    }
  };

  return (
    <ScreenWrapper title="Welcome" topColor="#00D09E" bottomColor="#fff">
      <View style={styles.contentCard}>
        <CustomInput
          label="Email"
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder="ejemplo@ejemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <CustomInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
        />

        <CustomButton
          title="Log In"
          onPress={onSignInPress}
          variant="primary"
        />

        <TouchableOpacity style={styles.forgotPasswordLink}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.separator}>
          <Text style={styles.separatorText}>or sign up with</Text>
        </View>

        <View style={styles.socialButtonsContainer}>
          <GoogleSignInButton />
        </View>

        <CustomLink
          text="Don't have an account?"
          linkText="Sign Up"
          onPress={() => router.push("/(auth)/sign-up")}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SignInScreen;

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

  forgotPasswordLink: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#666",
    fontSize: 14,
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
});
