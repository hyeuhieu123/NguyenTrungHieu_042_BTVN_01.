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

export default function Bai7() {
  return (
    <View>
      <Text>Bài 7</Text>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.messageList}>
          <View style={styles.incomingMessageBubble}>
            <Text style={styles.messageText}>Chào cậu, cậu khỏe không?</Text>
          </View>

          {/* Tin nhắn của bạn */}
          <View style={styles.outgoingMessageBubble}>
            <Text style={styles.messageText}>
              Tớ khỏe, cảm ơn cậu. Còn cậu thì sao?
            </Text>
          </View>

          {/* Tin nhắn của người khác */}
          <View style={styles.incomingMessageBubble}>
            <Text style={styles.messageText}>Tớ cũng ổn. Đang làm gì đó?</Text>
          </View>

          {/* Tin nhắn của bạn */}
          <View style={styles.outgoingMessageBubble}>
            <Text style={styles.messageText}>
              Tớ đang học React Native, khá là thú vị đó!
            </Text>
          </View>
        </ScrollView>

        {/* Vùng nhập liệu */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nhắn tin..."
            placeholderTextColor="#a0a0a0"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5", // Màu nền nhạt
  },
  messageList: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  incomingMessageBubble: {
    backgroundColor: "#E5E5EA", // Màu bong bóng tin nhắn đến
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 5,
    alignSelf: "flex-start",
    maxWidth: "80%",
    marginBottom: 10,
  },
  outgoingMessageBubble: {
    backgroundColor: "#007AFF", // Màu bong bóng tin nhắn đi (màu xanh dương)
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderBottomRightRadius: 5,
    alignSelf: "flex-end",
    maxWidth: "80%",
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
