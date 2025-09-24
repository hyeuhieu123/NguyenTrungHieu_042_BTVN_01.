import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Bai3() {
  const [name, setName] = useState("");

  return (
    <View>
        <Text>Bài 3</Text>
        <View style={{ flex: 1, backgroundColor: "#F2F4F7" }}>
            <View style={styles.container}>
                <Text style={styles.label}>Họ và tên:</Text>
                <TextInput
                style={styles.input}
                placeholder="Nhập tên của bạn..."
                placeholderTextColor="#999"
                value={name}
                onChangeText={(text) => setName(text)}
                />
                {name !== "" && <Text style={styles.result}>Xin chào, {name} 👋</Text>}
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#000", // chữ nhập vào sẽ luôn màu đen, không bị "mất"
  },
  result: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
  },
});
