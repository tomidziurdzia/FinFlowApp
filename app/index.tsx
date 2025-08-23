import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

const LaunchScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const navigationTimer = setTimeout(() => {
      router.push("/(home)");
    }, 1000);

    return () => {
      clearTimeout(navigationTimer);
    };
  }, [router]);

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
