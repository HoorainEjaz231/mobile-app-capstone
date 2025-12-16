import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "FAVORITES_ITEMS";

/**
 * Save item to local storage
 */
export const saveToFavorites = async (item) => {
  try {
    const existingItems = await AsyncStorage.getItem(FAVORITES_KEY);
    const favorites = existingItems ? JSON.parse(existingItems) : [];

    favorites.push(item);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.log("Error saving to favorites", error);
  }
};

/**
 * Get all favorite items from local storage
 */
export const getFavorites = async () => {
  try {
    const items = await AsyncStorage.getItem(FAVORITES_KEY);
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.log("Error getting favorites", error);
    return [];
  }
};

/**
 * Clear all favorite items
 */
export const clearFavorites = async () => {
  try {
    await AsyncStorage.removeItem(FAVORITES_KEY);
  } catch (error) {
    console.log("Error clearing favorites", error);
  }
};
