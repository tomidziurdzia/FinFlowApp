import {
  Dimensions,
  Platform,
  StatusBar,
  SafeAreaView,
  ViewStyle,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
  title?: string;
}

const { height } = Dimensions.get("window");

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  title = "Welcome",
}) => {
  const paddingTop =
    Platform.OS === "ios" ? height * 0.06 : StatusBar.currentHeight || 0;

  return (
    <SafeAreaView style={[styles.container, { paddingTop }, style]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#00D09E"
        translucent
      />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00D09E",
  },
  header: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00D09E",
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ScreenWrapper;
