'use client';
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mainMargin bg-white">
      {/* Newsletter Subscription */}
      <div className="flex flex-wrap justify-between items-center p-8 md:p-12 bg-black mt-10 rounded-3xl">
        <div className="bolded text-3xl xsm:text-4xl text-white mb-6 md:mb-0 max-w-[600px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <form className="flex flex-col gap-4 flex-grow max-w-md" action="">
          <div className="rounded-full bg-white p-3 flex w-full items-center">
            <MdOutlineEmail size={20} className="text-gray-400 ml-2" />
            <input className="text-black outline-none ml-2 w-full" placeholder="Enter your email address" />
          </div>
          <button type="submit" className="rounded-full bg-white p-3 text-black text-center font-medium">
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      {/* Main Footer */}
      <footer className="py-12">
        <div className="flex flex-wrap justify-between mt-6 gap-8 md:gap-4">
          {/* Company Info */}
          <div className="flex-grow flex flex-col gap-5 max-w-xs">
            <h1 className="bolded text-3xl font-bold">SHOP.CO</h1>
            <p className="text-gray-600">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-5">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <FaXTwitter size={18} />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <FaFacebook size={18} />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <FaInstagram size={18} />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <FaGithub size={18} />
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="flex-grow flex flex-col gap-4 md:items-start">
            <h1 className="font-semibold text-base">COMPANY</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-600 hover:text-black cursor-pointer">About</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Features</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Works</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Career</li>
            </ul>
          </div>

          {/* Help */}
          <div className="flex-grow flex flex-col gap-4 md:items-start">
            <h1 className="font-semibold text-base">HELP</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-600 hover:text-black cursor-pointer">Customer Support</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Delivery Details</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Terms & Conditions</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="flex-grow flex flex-col gap-4 md:items-start">
            <h1 className="font-semibold text-base">FAQ</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-600 hover:text-black cursor-pointer">Account</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Manage Deliveries</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Orders</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Payments</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-grow flex flex-col gap-4 md:items-start">
            <h1 className="font-semibold text-base">RESOURCES</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-600 hover:text-black cursor-pointer">Free eBooks</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Development Tutorial</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">How to - Blog</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Youtube Playlist</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 flex-wrap gap-4">
          <div className="text-gray-600">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex gap-3 items-center">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/paypal.png" alt="PayPal" className="h-6" />
            <img src="/applepay.png" alt="Apple Pay" className="h-6" />
            <img src="/googlepay.png" alt="Google Pay" className="h-6" />
          </div>
        </div>
      </footer>
    </div>
  );
}