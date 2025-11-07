"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Doc } from "../../convex/_generated/dataModel";
import IconOrderConfirmation from "../../public/assets/checkout/icon-order-confirmation.svg";

function OrderConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const order = useQuery(
    api.orders.getOrder,
    orderId ? { orderId: orderId } : "skip"
  );

  const isLoading = order === undefined;

  if (isLoading) {
    return (
      <div className="max-w-[1110px] mx-auto px-6 py-8 text-center">
        <p>Loading order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-[1110px] mx-auto px-6 py-8 text-center">
        <p>Order not found or invalid order ID.</p>
      </div>
    );
  }
  const typedOrder = order as Doc<"orders">;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-lg w-full">
        <Image
          src={IconOrderConfirmation}
          alt="Order Confirmed"
          width={64}
          height={64}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-4 uppercase">THANK YOU FOR YOUR ORDER</h1>
        <p className="text-gray-500 mb-6">
          You will receive an email confirmation shortly.
        </p>

        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden mb-6">
          <div className="bg-gray-100 p-6 flex-1">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <ul className="space-y-3">
              {typedOrder.items.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={item.image} // Corrected to use item.image
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div className="ml-4 text-left">
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-gray-500 text-xs">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">x{item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black text-white p-6 flex flex-col justify-center items-start md:items-center rounded-b-lg md:rounded-bl-none md:rounded-r-lg">
            <p className="text-gray-400 uppercase text-sm mb-2">Grand Total</p>
            <p className="text-xl font-bold">${typedOrder.totals.grandTotal.toFixed(2)}</p>
          </div>
        </div>
          
        <button
          onClick={() => router.push("/")}
          className="w-full bg-primary hover:bg-primary-light text-white py-3 uppercase font-bold rounded-lg transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div>Loading order confirmation...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
