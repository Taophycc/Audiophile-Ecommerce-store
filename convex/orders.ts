import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";

export const createOrder = mutation({
  args: {
    customerDetails: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shippingDetails: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.number(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const order = {
      ...args,
      status: "pending",
      timestamp: Date.now(),
    };
    return await ctx.db.insert("orders", order);
  },
});

export const getOrder = query({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    // const orderId: Id<"orders"> = new Id("orders", args.orderId);
    // const orderId = args.orderId;
    const orderId = args.orderId as Id<"orders">;
    return await ctx.db.get(orderId);
  },
});
