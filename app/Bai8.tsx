import React from "react";
import { StyleSheet, View, Text, Pressable, StatusBar } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const CustomButton = ({
  title,
  onPress,
  type = "primary",
  disabled = false,
}: CustomButtonProps) => {
  const getButtonStyles = () => {
    switch (type) {
      case "secondary":
        return disabled ? styles.disabledButton : styles.secondaryButton;
      case "danger":
        return disabled ? styles.disabledButton : styles.dangerButton;
      case "primary":
      default:
        return disabled ? styles.disabledButton : styles.primaryButton;
    }
  };

  const getButtonTextStyles = () => {
    switch (type) {
      case "secondary":
        return disabled ? styles.disabledText : styles.secondaryText;
      case "danger":
        return disabled ? styles.disabledText : styles.dangerText;
      case "primary":
      default:
        return disabled ? styles.disabledText : styles.primaryText;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.baseButton,
        getButtonStyles(),
        pressed && !disabled && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.baseText, getButtonTextStyles()]}>{title}</Text>
    </Pressable>
  );
};

export default function Bai8() {
  const handlePress = (buttonType: any) => {
    console.log(`Bạn đã nhấn vào nút: ${buttonType}`);
  };

  return (
    <View>
      <Text>Bài 8</Text>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Button Primary"
            onPress={() => handlePress("Primary")}
            type="primary"
          />
          <CustomButton
            title="Button Secondary"
            onPress={() => handlePress("Secondary")}
            type="secondary"
          />
          <CustomButton
            title="Button Danger"
            onPress={() => handlePress("Danger")}
            type="danger"
          />
          <CustomButton
            title="Button Disabled"
            onPress={() => handlePress("Disabled")}
            type="primary"
            disabled={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "85%",
  },
  baseButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
  },
  // Style cho các loại nút
  primaryButton: {
    backgroundColor: "#007AFF", // Xanh dương
    borderColor: "#007AFF",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF", // Nền trắng
    borderColor: "#007AFF",
  },
  dangerButton: {
    backgroundColor: "#FF3B30", // Đỏ
    borderColor: "#FF3B30",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC", // Xám
    borderColor: "#CCCCCC",
  },
  // Hiệu ứng khi nhấn
  buttonPressed: {
    opacity: 0.7,
  },
  // Style cho văn bản
  baseText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#007AFF",
  },
  dangerText: {
    color: "#FFFFFF",
  },
  disabledText: {
    color: "#999999",
  },
});
