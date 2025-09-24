import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Bai2() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Bài 2</Text>
      <View style={styles.container}>
        <Text style={styles.number}>{count}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.decreaseBtn]}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>GIẢM</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.increaseBtn]}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>TĂNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#222222",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  decreaseBtn: {
    backgroundColor: "#FF3B30",
  },
  increaseBtn: {
    backgroundColor: "#34C759",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
