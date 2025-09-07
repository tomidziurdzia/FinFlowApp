import React, { useState } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useSignUp, isClerkAPIResponseError } from "@clerk/clerk-expo";
import { CustomButton, CustomInput } from "@/components/auth";
import { useApiCall } from "@/utils/api";
import { createSyncUser } from "@/utils/sync-user";

const VerifyScreen = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const { apiCall } = useApiCall();

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    if (!code) {
      Alert.alert("Error", "Por favor ingresa el código de verificación");
      return;
    }

    if (code.length !== 6) {
      Alert.alert("Error", "El código debe tener 6 dígitos");
      return;
    }

    setIsLoading(true);

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });

        // Sincronizar usuario con el backend después de la verificación exitosa
        try {
          // Crear un objeto user temporal para la sincronización
          const tempUser = {
            id: signUpAttempt.createdUserId,
            emailAddresses: [{ emailAddress: signUpAttempt.emailAddress }],
            firstName: signUpAttempt.firstName || "",
            lastName: signUpAttempt.lastName || "",
            imageUrl: "",
            createdAt: new Date(),
            updatedAt: new Date(),
          } as any;

          const syncUserFn = createSyncUser(apiCall);
          await syncUserFn(tempUser);

          console.log("Usuario sincronizado exitosamente con el backend");
        } catch (syncError: any) {
          console.error(
            "Error al sincronizar usuario con el backend:",
            syncError
          );
          // No mostramos error al usuario ya que la verificación fue exitosa
          // Solo logueamos el error para debugging
        }

        router.replace("/(home)");
      } else {
        Alert.alert("Error", "No se pudo completar la verificación");
        console.log("Verificación fallida:", signUpAttempt);
      }
    } catch (err: any) {
      console.log("Error en verificación: ", err);

      if (isClerkAPIResponseError(err)) {
        // Manejar errores específicos de Clerk
        const errorMessage =
          err.errors?.[0]?.longMessage ||
          err.errors?.[0]?.message ||
          "Error al verificar el código";
        Alert.alert("Error", errorMessage);
      } else {
        Alert.alert("Error", "Error desconocido al verificar el código");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onResendCode = async () => {
    if (!isLoaded) return;

    try {
      await signUp.prepareVerification({ strategy: "email_code" });
      Alert.alert("Éxito", "Código de verificación reenviado");
    } catch (err: any) {
      console.log("Error al reenviar código: ", err);
      Alert.alert("Error", "No se pudo reenviar el código");
    }
  };

  return (
    <ScreenWrapper
      title="Verificar Email"
      topColor="#00D09E"
      bottomColor="#fff"
    >
      <View style={styles.contentCard}>
        <Text style={styles.description}>
          Te hemos enviado un código de verificación a tu email. Ingresa el
          código de 6 dígitos para completar tu registro.
        </Text>

        <CustomInput
          label="Código de verificación"
          value={code}
          onChangeText={setCode}
          placeholder="123456"
          keyboardType="number-pad"
          autoCapitalize="none"
          maxLength={6}
        />

        <CustomButton
          title={isLoading ? "Verificando..." : "Verificar"}
          onPress={onVerifyPress}
          variant="primary"
          disabled={isLoading}
        />

        <CustomButton
          title="Reenviar código"
          onPress={onResendCode}
          variant="secondary"
          disabled={isLoading}
        />
      </View>
    </ScreenWrapper>
  );
};

export default VerifyScreen;

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
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
});
