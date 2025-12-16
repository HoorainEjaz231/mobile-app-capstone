import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Nike Sneakers",
    price: "$120",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Running Shoes",
    price: "$95",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Casual Shoes",
    price: "$80",
    image: "https://via.placeholder.com/150",
  },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Stylish</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    padding: 12,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
});
