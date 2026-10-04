import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Product from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";
import NewArrivals from "@/pages/NewArrivals";
import BestSellers from "@/pages/BestSellers";
import Wishlist from "@/pages/Wishlist";
import Checkout from "@/pages/Checkout";
import Login from "@/pages/Login";
import Signup  from "@/pages/Signup";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";
import ProductDetails from "@/pages/ProductDetails";
import Sale from "@/pages/Sale";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/collections" element={<Collection />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/best-sellers" element={<BestSellers />}/>
          <Route path="/sale" element={<Sale />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export { Home, Collection, Product, Cart, Wishlist, Checkout, Login, Register };