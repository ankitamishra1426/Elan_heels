import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useAuth } from "@/context/AuthContext";

import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "@/services/cartService";

import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [cart, setCart] = useState({
    items: [],
  });

  const [loading, setLoading] = useState(false);

  // -----------------------------------------
  // GET CART
  // -----------------------------------------

  const fetchCart = async () => {
    if (!isAuthenticated) {
      setCart({ items: [] });
      return;
    }

    try {
      setLoading(true);

      const data = await getCart();

      setCart(data.cart);
    } catch (error) {
      console.error("GET CART ERROR:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load cart"
      );
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------
  // LOAD CART WHEN USER LOGS IN
  // -----------------------------------------

  useEffect(() => {
    if (!authLoading) {
      fetchCart();
    }
  }, [isAuthenticated, authLoading]);

  // -----------------------------------------
  // ADD TO CART
  // -----------------------------------------

  const addItem = async (productData) => {
    if (!isAuthenticated) {
      toast.error("Please login to add products to cart.");
      return false;
    }

    try {
      setLoading(true);

      const data = await addToCart(productData);

      setCart(data.cart);

      toast.success("Added to cart");

      return true;
    } catch (error) {
      console.error("ADD TO CART ERROR:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to add product"
      );

      return false;
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------
  // UPDATE QUANTITY
  // -----------------------------------------

  const updateItem = async (itemId, quantity) => {
    try {
      const data = await updateCartItem(
        itemId,
        quantity
      );

      setCart(data.cart);
    } catch (error) {
      console.error("UPDATE CART ERROR:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update cart"
      );
    }
  };

  // -----------------------------------------
  // REMOVE ITEM
  // -----------------------------------------

  const removeItem = async (itemId) => {
    try {
      const data = await removeCartItem(itemId);

      setCart(data.cart);

      toast.success("Item removed");
    } catch (error) {
      console.error("REMOVE CART ERROR:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to remove item"
      );
    }
  };

  // -----------------------------------------
  // CLEAR CART
  // -----------------------------------------

  const emptyCart = async () => {
    try {
      const data = await clearCart();

      setCart(data.cart);

      toast.success("Cart cleared");
    } catch (error) {
      console.error("CLEAR CART ERROR:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to clear cart"
      );
    }
  };

  // -----------------------------------------
  // CART TOTALS
  // -----------------------------------------

  const itemCount = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        items: cart.items,

        loading,

        itemCount,
        subtotal,

        fetchCart,

        addItem,
        updateItem,
        removeItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// -----------------------------------------
// CUSTOM HOOK
// -----------------------------------------

export const useCart = () => {
  return useContext(CartContext);
};
