import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SignOutButton } from "../../components/SignOutButton";

export default function HomePage() {
  const { user } = useUser();
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/(auth)/sign-in");
  };

  const handleSignUp = () => {
    router.push("/(auth)/sign-up");
  };

  return (
    <View style={styles.container}>
      <SignedIn>
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
      </SignedIn>

      <SignedOut>
        <View style={styles.authContainer}>
          <Text style={styles.title}>FinFlow</Text>
          <Text style={styles.subtitle}>
            Tu aplicación de finanzas personales
          </Text>
          <Text style={styles.description}>
            Gestiona tus finanzas de manera inteligente y segura
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleSignIn}
            >
              <Text style={styles.primaryButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleSignUp}
            >
              <Text style={styles.secondaryButtonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SignedOut>
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
  authContainer: {
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
  buttonContainer: {
    width: "100%",
    gap: 15,
  },
  primaryButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  secondaryButtonText: {
    color: "#007AFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
