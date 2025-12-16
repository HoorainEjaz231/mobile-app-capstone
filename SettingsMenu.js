import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SettingsMenu = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () => setIsNotificationsEnabled(prev => !prev);

  const handleChangePassword = () => {
    Alert.alert("Change Password", "Redirecting to Change Password Screen...");
    // navigation.navigate('ChangePasswordScreen'); // Uncomment if you have a screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.item}>
        <Text style={styles.itemText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Notifications</Text>
        <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <TouchableOpacity style={styles.item} onPress={handleChangePassword}>
        <Text style={styles.itemText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.item, styles.logoutButton]} onPress={() => Alert.alert("Logout", "Logging out...")}>
        <Text style={[styles.itemText, { color: 'white' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
