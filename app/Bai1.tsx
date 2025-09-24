import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Bai1() {
  return (
    <View>
      <Text>Bài 1</Text>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://picsum.photos/100" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nguyễn Văn A</Text>
        <Text style={styles.description}>
          React Native Developer | UI/UX Enthusiast
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
