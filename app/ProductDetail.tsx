import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { Heart, ArrowLeft } from 'lucide-react-native';
// Icon thư viện Lucide (sử dụng SVG đơn giản để mô phỏng)
const ChevronLeft = () => (
  <View style={styles.iconWrapper}>
    <Text style={{ fontSize: 24, color: "#fff"}}><ArrowLeft /></Text>
  </View>
);

const HeartIcon = () => (
  <View style={styles.iconWrapper}>
    <Text style={{ fontSize: 18 }}><Heart /></Text>
  </View>
);

export default function ProductDetail() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={styles.scrollView}>
        {/* Khu vực ảnh sản phẩm */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://dothethao.net.vn/wp-content/uploads/2020/11/giay-the-thao-nam-sneaker-off-white-co-thap-ls07w-2-600x600.jpg",
            }}
            style={styles.productImage}
          />
          <TouchableOpacity style={styles.backButton}>
            <ChevronLeft />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <Heart />
          </TouchableOpacity>
        </View>

        {/* Khu vực thông tin cơ bản */}
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>
            Giày Sneaker Cổ Thấp Thời Trang
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐ 4.9 | 86 Đánh giá</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>1.250.000đ</Text>
            <Text style={styles.oldPrice}>1.800.000đ</Text>
          </View>

          {/* Khu vực lựa chọn */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Chọn Kích thước</Text>
            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.optionText}>39</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.optionText}>40</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.sizeOption, styles.selectedOption]}
              >
                <Text style={[styles.optionText, styles.selectedOptionText]}>
                  41
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.optionText}>42</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.optionText}>43</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Khu vực mô tả sản phẩm */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Mô tả</Text>
            <Text style={styles.descriptionText}>
              Một đôi giày sneaker đa năng với thiết kế tối giản, phù hợp cho
              mọi hoạt động hàng ngày từ đi làm, đi chơi đến tập luyện nhẹ. Chất
              liệu vải dệt thoáng khí và đế đệm êm ái mang lại cảm giác thoải
              mái suốt cả ngày.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Khu vực nút hành động (Footer) */}
      <View style={styles.footerContainer}>
        <Pressable style={[styles.footerButton, styles.addToCartButton]}>
          <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
        </Pressable>
        <Pressable style={[styles.footerButton, styles.buyNowButton]}>
          <Text style={styles.buyNowText}>Mua ngay</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 350,
    backgroundColor: "#FF0000", // Màu nền đỏ của ảnh mẫu
    position: "relative",
  },
  iconWrapper: {
    width: 24,
    height: 24,
    lineHeight: 24,
    transform: [{ translateY: -2 }], 
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(49, 46, 46, 0.7)",
    borderRadius: 20,
    width: 40,
    height: 40,
    lineHeight: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(49, 46, 46, 0.7)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    marginTop: -20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    color: "#666",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E63946", // Màu đỏ nổi bật
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  sizeOption: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  selectedOption: {
    backgroundColor: "#1C3144",
    borderColor: "#1C3144",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  selectedOptionText: {
    color: "#fff",
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  footerButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  addToCartButton: {
    backgroundColor: "#fff",
    borderColor: "#007AFF",
    marginRight: 10,
  },
  addToCartText: {
    color: "#007AFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  buyNowButton: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  buyNowText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
