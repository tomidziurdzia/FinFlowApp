import { useUser } from "@clerk/clerk-expo";
import { Text, View, StyleSheet } from "react-native";
import { SignOutButton } from "@/components/SignOutButton";

export default function HomePage() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>¡Bienvenido a FinFlow!</Text>
        <Text style={styles.subtitle}>
          Hola {user?.emailAddresses[0]?.emailAddress}
        </Text>
        <Text style={styles.description}>
          Tu aplicación de finanzas personales
        </Text>
        <SignOutButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
    color: "#666",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#888",
    lineHeight: 24,
  },
});
