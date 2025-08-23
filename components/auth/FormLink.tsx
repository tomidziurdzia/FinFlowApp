import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface FormLinkProps {
  text: string;
  linkText: string;
  onPress: () => void;
  align?: "center" | "flex-start" | "flex-end";
}

const FormLink: React.FC<FormLinkProps> = ({
  text,
  linkText,
  onPress,
  align = "center",
}) => {
  return (
    <View style={[styles.container, { alignItems: align }]}>
      <Text style={styles.text}>
        {text}{" "}
        <Text style={styles.linkText} onPress={onPress}>
          {linkText}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    color: "#666",
    fontSize: 14,
  },
  linkText: {
    color: "#007AFF",
    fontWeight: "600",
  },
});

export default FormLink;
