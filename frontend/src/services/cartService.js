import api from "./api";

// Get logged-in user's cart
export const getCart = async () => {
  const response = await api.get("/cart");

  return response.data;
};

// Add product to cart
export const addToCart = async (productData) => {
  const response = await api.post("/cart/add", productData);

  return response.data;
};

// Update cart item quantity
export const updateCartItem = async (itemId, quantity) => {
  const response = await api.put(`/cart/item/${itemId}`, {
    quantity,
  });

  return response.data;
};

// Remove item from cart
export const removeCartItem = async (itemId) => {
  const response = await api.delete(`/cart/item/${itemId}`);

  return response.data;
};

// Clear entire cart
export const clearCart = async () => {
  const response = await api.delete("/cart/clear");

  return response.data;
};