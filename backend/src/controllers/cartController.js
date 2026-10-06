import Cart from "../models/Cart.js";

// ==========================================
// GET CART
// ==========================================
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("GET CART ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get cart.",
    });
  }
};

// ==========================================
// ADD ITEM TO CART
// ==========================================
export const addToCart = async (req, res) => {
  try {
    const {
      productId,
      name,
      image,
      price,
      size,
      color,
      quantity = 1,
    } = req.body;

    // Validate product information
    if (
      !productId ||
      !name ||
      !image ||
      price === undefined ||
      !size ||
      !color
    ) {
      return res.status(400).json({
        success: false,
        message: "Product information is incomplete.",
      });
    }

    // Find user's cart
    let cart = await Cart.findOne({
      user: req.user._id,
    });

    // Create cart if it doesn't exist
    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    // ==========================================
    // CHECK SAME PRODUCT + SAME SIZE + SAME COLOR
    // ==========================================
    const existingItem = cart.items.find(
      (item) =>
        item.productId === String(productId) &&
        item.size === String(size) &&
        item.color === String(color)
    );

    // ==========================================
    // IF SAME ITEM EXISTS → INCREASE QUANTITY
    // ==========================================
    if (existingItem) {
      existingItem.quantity += Number(quantity) || 1;
    } else {
      // ==========================================
      // OTHERWISE → CREATE NEW CART ITEM
      // ==========================================
      cart.items.push({
        productId: String(productId),
        name,
        image,
        price: Number(price),
        size: String(size),
        color: String(color),
        quantity: Number(quantity) || 1,
      });
    }

    // Save cart
    await cart.save();

    // Return updated cart
    res.status(200).json({
      success: true,
      message: "Product added to cart.",
      cart,
    });
  } catch (error) {
    console.error("ADD TO CART ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add product to cart.",
    });
  }
};

// ==========================================
// UPDATE CART ITEM
// ==========================================
export const updateCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1.",
      });
    }

    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found.",
      });
    }

    const item = cart.items.id(itemId);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found.",
      });
    }

    item.quantity = quantity;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart updated.",
      cart,
    });
  } catch (error) {
    console.error("UPDATE CART ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update cart.",
    });
  }
};

// ==========================================
// REMOVE ITEM FROM CART
// ==========================================
export const removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;

    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found.",
      });
    }

    const item = cart.items.id(itemId);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found.",
      });
    }

    item.deleteOne();

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product removed from cart.",
      cart,
    });
  } catch (error) {
    console.error("REMOVE CART ITEM ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to remove cart item.",
    });
  }
};

// ==========================================
// CLEAR CART
// ==========================================
export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found.",
      });
    }

    cart.items = [];

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart cleared.",
      cart,
    });
  } catch (error) {
    console.error("CLEAR CART ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to clear cart.",
    });
  }
};