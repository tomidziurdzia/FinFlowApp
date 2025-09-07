import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useSignUp } from "@clerk/clerk-expo";
import { CustomButton, CustomInput, FormLink } from "@/components/auth";

const SignUpScreen = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    router.push("/(auth)/sign-in");
  };

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    if (!emailAddress || !password) {
      Alert.alert("Error", "Please complete all fields");
      return;
    }

    try {
      const signUpAttempt = await signUp.create({
        emailAddress,
        password,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(home)");
      } else {
        Alert.alert("Error", "Sign up incomplete");
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err: any) {
      Alert.alert("Error", err.errors?.[0]?.message || "Error signing up");
    }
  };

  return (
    <ScreenWrapper title="Create Account" topColor="#00D09E" bottomColor="#fff">
      <View style={styles.contentCard}>
        <CustomInput
          label="Email"
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder="example@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <CustomInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
        />

        <CustomButton
          title="Create Account"
          onPress={onSignUpPress}
          variant="primary"
        />

        <FormLink
          text="Already have an account?"
          linkText="Sign In"
          onPress={handleSignIn}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SignUpScreen;

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
});
