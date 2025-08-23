import { Image, StyleSheet, Text, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const LaunchScreen = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace("/(home)");
    } else {
      router.replace("/(auth)/sign-in");
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>FinFlow</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>FinFlow</Text>
    </View>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00D09E",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#fff",
  },
});
