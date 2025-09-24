import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

export default function Bai6() {
  return (
    <View>
      <Text>Bài 6</Text>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.headerTitle}>Danh sách công việc</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.taskInput}
            placeholder="Nhập công việc mới..."
            placeholderTextColor="#a0a0a0"
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Thêm</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.taskListContainer}>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Học React Native Styling</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Làm bài tập về ScrollView</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Tìm hiểu về component Pressable</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Chuẩn bị cho dự án cuối kỳ</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Đọc sách chuyên ngành 30 phút</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  taskInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginRight: 10,
  },
  addButton: {
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskListContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
});
