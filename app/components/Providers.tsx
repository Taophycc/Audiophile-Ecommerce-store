"use client";

import { MenuProvider } from "../contexts/MenuContext";
import { CartProvider } from "../contexts/CartContext";
import ConvexClientProvider from "../ConvexClientProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <MenuProvider>
        <CartProvider>{children}</CartProvider>
      </MenuProvider>
    </ConvexClientProvider>
  );
}