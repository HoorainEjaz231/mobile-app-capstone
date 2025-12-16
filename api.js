const API_URL = "https://fakestoreapi.com/products";

/**
 * Fetch products from external API
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};
