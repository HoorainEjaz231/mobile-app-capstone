import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const DetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: "https://via.placeholder.com/300" }}
        style={styles.image}
      />

      {/* Product Info */}
      <View style={styles.content}>
        <Text style={styles.title}>Nike Sneakers</Text>
        <Text style={styles.price}>$120</Text>

        <Text style={styles.description}>
          These Nike sneakers are comfortable, stylish, and perfect for daily
          wear. Made with high-quality materials for long-lasting use.
        </Text>

        {/* Actions */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: "#ff4d67",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#eee",
    padding: 14,
    borderRadius: 6,
    marginBottom: 12,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "600",
  },
  buyButton: {
    backgroundColor: "#ff4d67",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
