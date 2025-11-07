"use client";

import { useCart } from "../contexts/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartModal({ onClose }: { onClose: () => void }) {
  const { cartItems, totalPrice, updateQuantity, clearCart } = useCart();

  return (
    <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose}>
      <div className="absolute top-28 right-0 md:right-10 lg:right-40 bg-white w-full max-w-md p-8 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold uppercase">Cart ({cartItems.length})</h2>
          <button onClick={clearCart} className="text-gray-500 underline">
            Remove all
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                    <div className="ml-4">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-500">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-gray-200">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className="px-3 py-1"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-8">
              <p className="text-gray-500 uppercase">Total</p>
              <p className="text-2xl font-bold">${totalPrice.toLocaleString()}</p>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-primary text-white text-center py-3 mt-6 uppercase font-bold rounded-lg"
              onClick={onClose}
            >
              Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}