'use client';
import React from 'react';
import { Cross, CrossIcon, Search, ShoppingCart, User, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [visible, setVisible] = useState(true); // banner visibility

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
    } else {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results);
    }
  }, [query, products]);

  return (
    <>
      
      {visible && (
        <div className="w-full bg-black text-white text-center py-2 text-sm relative">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <span className="font-medium underline">Sign Up Now</span>
          </p>
          <button
            className="absolute right-4 top-2 pr-15"
            onClick={() => setVisible(false)}
          >
            <XIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      )}

      {/* Main navbar */}
      <div className="w-full flex items-center justify-between px-16 py-4 bg-white">
        <div className="font-bold text-4xl text-black">SHOP.CO</div>

        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <a href="#" className="font-medium text-black">Shop</a>
            <span className="ml-1 text-black">▼</span>
          </div>
          <a href="#" className="font-medium text-black">On Sale</a>
          <a href="#" className="font-medium text-black">New Arrivals</a>
          <a href="#" className="font-medium text-black">Brands</a>
        </nav>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-gray-800 text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {filtered.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md z-10 max-h-60 overflow-y-auto">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-black">
          <button>
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button>
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
}
