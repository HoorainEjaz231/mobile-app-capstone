import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SettingsMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Menu</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.text}>⚙️ Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.text}>🔔 Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.text}>👤 Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={[styles.text, { color: "red" }]}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 16,
  },
});
