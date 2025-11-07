"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch('/assets/db.json');
      const data = await res.json();
      setProducts(data.data);
    }
    getProducts();
  }, []);

  return (
    <div className="max-w-[1110px] mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Image
              src={product.image.desktop.replace('./', '/')}
              alt={product.name}
              width={350}
              height={318}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">{product.name}</h2>
            <p className="text-gray-500 mt-2">${product.price.toLocaleString()}</p>
            <Link href={`/products/${product.slug}`} className="bg-primary text-white px-8 py-3 mt-4 inline-block uppercase text-sm font-bold tracking-wider">
              See Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}