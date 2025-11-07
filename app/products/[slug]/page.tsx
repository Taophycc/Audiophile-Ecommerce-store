"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "../../contexts/CartContext";
import Category from "../../components/Category";
import AboutAudioGear from "../../components/AboutAudioGear";

interface IncludedItem {
  quantity: number;
  item: string;
}

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
  features: string;
  includes: IncludedItem[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    async function getProduct() {
      const res = await fetch("/assets/db.json");
      const data = await res.json();

      const product = data.data.find((p: Product) => p.slug === slug) as
        | Product
        | undefined;
      setProduct(product || null);
    }
    getProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      image: product.image.desktop.replace("./", "/"),
    };
    addToCart(cartItem);
  };

  return (
    <div className="max-w-[1110px] mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 gap-20 mt-8">
        <div>
          <Image
            src={product.image.desktop.replace("./", "/")}
            alt={product.name}
            width={540}
            height={560}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          {product.new && (
            <p className="text-primary uppercase tracking-widest">
              New Product
            </p>
          )}
          <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
          <p className="text-gray-500 mt-4">{product.description}</p>
          <p className="text-2xl font-bold mt-4">
            ${product.price.toLocaleString()}
          </p>
          <div className="flex items-center mt-8">
            <div className="flex items-center bg-gray-200">
              <button
                className="px-4 py-2 cursor-pointer"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-4 py-2 cursor-pointer"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white px-8 py-2 ml-4 uppercase cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-16">
        <div className="md:w-2/3 md:pr-16">
          <h3 className="text-3xl font-bold">Features</h3>
          <p className="text-gray-500 mt-4 whitespace-pre-line">
            {product.features}
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/3">
          <h3 className="text-3xl font-bold">In the Box</h3>
          <ul className="mt-4">
            {product.includes.map((item, index) => (
              <li key={index} className="flex">
                <span className="text-primary font-bold mr-4">
                  {item.quantity}x
                </span>
                <span className="text-gray-500">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="grid gap-8">
          <Image
            src={product.gallery.first.desktop.replace("./", "/")}
            alt={`${product.name} gallery image 1`}
            width={445}
            height={280}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src={product.gallery.second.desktop.replace("./", "/")}
            alt={`${product.name} gallery image 2`}
            width={445}
            height={280}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="">
          <Image
            src={product.gallery.third.desktop.replace("./", "/")}
            alt={`${product.name} gallery image 3`}
            width={635}
            height={592}
            className="w-full h-auto rounded-lg md:row-span-2"
          />
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          YOU MAY ALSO LIKE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.others.map((otherProduct, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={otherProduct.image.desktop.replace("./", "/")}
                alt={otherProduct.name}
                width={350}
                height={318}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-xl font-bold mt-8">{otherProduct.name}</h3>
              <Link
                href={`/products/${otherProduct.slug}`}
                className="bg-primary text-white px-8 py-3 mt-6 uppercase text-sm font-bold tracking-wider"
              >
                SEE PRODUCT
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <Category />
      </div>

      <div className="mt-16">
        <AboutAudioGear />
      </div>
    </div>
  );
}
