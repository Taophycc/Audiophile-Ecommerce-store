"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useRouter } from 'next/navigation';
import { useAction } from 'convex/react';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';


interface IFormInput {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

export default function CheckoutPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const { cartItems, totalPrice, clearCart } = useCart();
  console.log("Cart items in checkout:", cartItems);
  const paymentMethod = watch('paymentMethod');
  const router = useRouter();

  const shipping = 50;
  const vat = totalPrice * 0.2;
  const grandTotal = totalPrice + shipping + vat;

  const createOrder = useMutation(api.orders.createOrder);
  const sendConfirmationEmail = useAction(api.sendEmail.sendEmail);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    console.log("Form data on submit:", data);
    console.log("Cart items on submit:", cartItems);
    setIsSubmitting(true);
    setError(null);
    try {
      const orderId = await createOrder({
        customerDetails: {
          name: data.name,
          email: data.email,
          phone: data.phone,
        },
        shippingDetails: {
          address: data.address,
          zip: data.zip,
          city: data.city,
          country: data.country,
        },
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        totals: {
          subtotal: totalPrice,
          shipping: shipping,
          taxes: vat,
          grandTotal: grandTotal,
        },
      });
      console.log("Order created with ID:", orderId);

      // Send confirmation email
      const emailSubject = `Audiophile Order Confirmation - #${orderId}`;
      const emailHtml = `
        <h1>Thank you for your order, ${data.name}!</h1>
        <p>Your order ID is: ${orderId}</p>
        <p>Shipping to: ${data.address}, ${data.city}, ${data.country}</p>
        <p>Items:</p>
        <ul>
          ${cartItems.map(item => `<li>${item.name} x ${item.quantity} - $${item.price}</li>`).join('')}
        </ul>
        <p>Grand Total: $${grandTotal.toFixed(2)}</p>
        <p>View your order: <a href="${window.location.origin}/order-confirmation?orderId=${orderId}">Click here</a></p>
        <p>Support: support@audiophile.com</p>
      `;

      const result = await sendConfirmationEmail({
        to: data.email,
        subject: emailSubject,
        html: emailHtml,
      });

      if (result.success) {
        console.log("Email sent!");
        clearCart(); // Clear the cart after successful order
      } else {
        console.error("Failed to send email.");
      }

      router.push(`/order-confirmation?orderId=${orderId}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (fieldName: keyof IFormInput) => (
    `w-full p-3 border rounded-lg ${errors[fieldName] ? 'border-red-500' : 'border-gray-300'}`
  );

  return (
    <div className="max-w-[1110px] mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg p-8">
          <h2 className="text-xl font-bold mb-6 text-primary uppercase">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" {...register('name', { required: 'Name is required' })} className={getInputClass('name')} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
              <input type="email" id="email" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })} className={getInputClass('email')} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
              <input type="tel" id="phone" {...register('phone', { required: 'Phone number is required' })} className={getInputClass('phone')} />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-6 text-primary uppercase">Shipping Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-bold mb-2">Your Address</label>
              <input type="text" id="address" {...register('address', { required: 'Address is required' })} className={getInputClass('address')} />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-bold mb-2">ZIP Code</label>
              <input type="text" id="zip" {...register('zip', { required: 'ZIP Code is required' })} className={getInputClass('zip')} />
              {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-bold mb-2">City</label>
              <input type="text" id="city" {...register('city', { required: 'City is required' })} className={getInputClass('city')} />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-bold mb-2">Country</label>
              <input type="text" id="country" {...register('country', { required: 'Country is required' })} className={getInputClass('country')} />
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
            </div>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-6 text-primary uppercase">Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Payment Method</label>
              <div className="flex flex-col gap-3">
                <label htmlFor="e-money" className={`flex items-center p-3 border rounded-lg ${errors.paymentMethod ? 'border-red-500' : 'border-gray-300'}`}>
                  <input type="radio" id="e-money" {...register('paymentMethod', { required: 'Payment method is required' })} value="e-money" className="mr-3" />
                  E-Money
                </label>
                <label htmlFor="cash-on-delivery" className={`flex items-center p-3 border rounded-lg ${errors.paymentMethod ? 'border-red-500' : 'border-gray-300'}`}>
                  <input type="radio" id="cash-on-delivery" {...register('paymentMethod', { required: 'Payment method is required' })} value="cash-on-delivery" className="mr-3" />
                  Cash on Delivery
                </label>
              </div>
              {errors.paymentMethod && <p className="text-red-500 text-xs mt-1">{errors.paymentMethod.message}</p>}
            </div>
            {paymentMethod === 'e-money' && (
              <>
                <div>
                  <label htmlFor="e-money-number" className="block text-sm font-bold mb-2">E-Money Number</label>
                  <input type="text" id="e-money-number" {...register('eMoneyNumber', { required: 'E-Money Number is required' })} className={getInputClass('eMoneyNumber')} />
                  {errors.eMoneyNumber && <p className="text-red-500 text-xs mt-1">{errors.eMoneyNumber.message}</p>}
                </div>
                <div>
                  <label htmlFor="e-money-pin" className="block text-sm font-bold mb-2">E-Money PIN</label>
                  <input type="text" id="e-money-pin" {...register('eMoneyPin', { required: 'E-Money PIN is required' })} className={getInputClass('eMoneyPin')} />
                  {errors.eMoneyPin && <p className="text-red-500 text-xs mt-1">{errors.eMoneyPin.message}</p>}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="lg:col-span-1 bg-white rounded-lg p-8">
          <h2 className="text-xl font-bold mb-6 uppercase">Summary</h2>
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
                <p>x{item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-gray-500 mb-2 mt-8">
            <span>Total</span>
            <span>$ {totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-500 mb-2">
            <span>Shipping</span>
            <span>$ {shipping.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-500 mb-2">
            <span>VAT (Included)</span>
            <span>$ {vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-black font-bold text-lg mt-4">
            <span>Grand Total</span>
            <span>$ {grandTotal.toFixed(2)}</span>
          </div>
          {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 mt-6 uppercase font-bold rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Continue & Pay'}
          </button>
        </div>
      </form>
    </div>
  );
}
