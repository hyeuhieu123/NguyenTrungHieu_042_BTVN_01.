import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

export default function Bai4() {
  return (
    <View>
        <Text>Bài 4</Text>
        <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Điều khoản sử dụng</Text>

        <Text style={styles.paragraph}>
          Chào mừng bạn đến với ứng dụng của chúng tôi.{"\n"}
          Bằng cách truy cập hoặc sử dụng ứng dụng, bạn đồng ý bị ràng buộc bởi
          các điều khoản và điều kiện này.
        </Text>

        <Text style={styles.section}>1. Chấp nhận Điều khoản</Text>
        <Text style={styles.paragraph}>
          Bằng việc sử dụng Dịch vụ, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý
          tuân thủ các Điều khoản này. Nếu bạn không đồng ý với bất kỳ phần nào
          của các điều khoản, bạn không được phép truy cập Dịch vụ.
        </Text>

        <Text style={styles.section}>2. Thay đổi Điều khoản</Text>
        <Text style={styles.paragraph}>
          Chúng tôi có quyền sửa đổi hoặc thay thế các Điều khoản này vào bất kỳ
          lúc nào theo quyết định riêng của chúng tôi. Nếu một bản sửa đổi là quan
          trọng, chúng tôi sẽ cố gắng cung cấp thông báo ít nhất 30 ngày trước khi
          bất kỳ điều khoản mới nào có hiệu lực.{"\n"}
          Việc sử dụng tiếp tục Dịch vụ sau khi các sửa đổi có hiệu lực sẽ cấu
          thành sự chấp nhận các điều khoản mới.
        </Text>

        <Text style={styles.section}>3. Quyền riêng tư</Text>
        <Text style={styles.paragraph}>
        Chính sách Bảo mật của chúng tôi mô tả cách chúng tôi xử lý thông tin bạn cung cấp cho chúng tôi khi bạn sử dụng Dịch vụ của chúng tôi. Bạn hiểu rằng thông qua việc sử dụng Dịch vụ, bạn đồng ý với việc thu thập và sử dụng (như được quy định trong Chính sách Bảo mật) thông tin này.
        </Text>

        <Text style={styles.section}>4. Nội dung</Text>
        <Text style={styles.paragraph}>
Dịch vụ của chúng tôi cho phép bạn đăng, liên kết, lưu trữ, chia sẻ và cung cấp một số thông tin, văn bản, đồ họa, video hoặc tài liệu khác ("Nội dung"). Bạn chịu trách nhiệm về Nội dung mà bạn đăng lên Dịch vụ, bao gồm cả tính hợp pháp, độ tin cậy và sự phù hợp của nó.
        </Text>

        <Text style={styles.section}>5. Chấm dứt</Text>
        <Text style={styles.paragraph}>
Chúng tôi có thể chấm dứt hoặc đình chỉ quyền truy cập của bạn vào Dịch vụ của chúng tôi ngay lập tức, mà không cần thông báo trước hoặc chịu trách nhiệm pháp lý, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn nếu bạn vi phạm các Điều khoản.        </Text>
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: "#333",
  },
});
