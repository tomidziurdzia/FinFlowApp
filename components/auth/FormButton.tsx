import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface FormButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  fullWidth?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  fullWidth = true,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "primary" ? styles.primaryButton : styles.secondaryButton,
        fullWidth && styles.fullWidth,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          variant === "primary"
            ? styles.primaryButtonText
            : styles.secondaryButtonText,
          disabled && styles.disabledButtonText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fullWidth: {
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#00D09E",
    marginTop: 10,
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#00D09E",
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: "#ccc",
    borderColor: "#ccc",
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  primaryButtonText: {
    color: "#fff",
  },
  secondaryButtonText: {
    color: "#00D09E",
  },
  disabledButtonText: {
    color: "#999",
  },
});

export default FormButton;
