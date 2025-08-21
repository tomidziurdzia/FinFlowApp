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
  topColor?: string;
  bottomColor?: string;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  title = "Welcome",
  topColor = "#00D09E",
  bottomColor = "#00D09E",
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bottomColor }]}>
      <SafeAreaView style={[styles.topSafeArea, { backgroundColor: topColor }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={topColor}
          translucent
        />

        <View style={[styles.header, { backgroundColor: topColor }]}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </SafeAreaView>

      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSafeArea: {
    backgroundColor: "#00D09E",
  },
  header: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    flex: 1,
  },
});

export default ScreenWrapper;
