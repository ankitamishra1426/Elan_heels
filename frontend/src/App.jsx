import AppRoutes from "../src/routes/AppRoutes";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppRoutes />

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2500,
          }}
        />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;