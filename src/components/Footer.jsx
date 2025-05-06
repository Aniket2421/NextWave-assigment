import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  shopPay,
  mastercard,
  paypal,
  amex,
  applePay,
  googlePay,
  usFlag,
} from "../assets/images/payment";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">BE THE FIRST TO KNOW</h3>
            <p className="text-sm mb-4">Sign up for updates from mettā muse.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="bg-transparent border border-gray-600 px-4 py-2 flex-grow text-sm"
              />
              <button className="border border-gray-600 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">CONTACT US</h3>
            <p className="text-sm mb-2">+44 221 133 5360</p>
            <p className="text-sm mb-4">customercare@mettamuse.com</p>
            <h3 className="text-lg font-medium mb-2">CURRENCY</h3>
            <div className="flex items-center gap-2">
              <img src={usFlag} alt="US Flag" className="w-5 h-4" />
              <span className="text-sm">$ USD</span>
            </div>
            <p className="text-xs mt-2 text-gray-400">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="/orders" className="text-sm hover:underline">
                  Orders & Shipping
                </a>
              </li>
              <li>
                <a href="/join" className="text-sm hover:underline">
                  Join/Login as a Seller
                </a>
              </li>
              <li>
                <a href="/payment" className="text-sm hover:underline">
                  Payment & Pricing
                </a>
              </li>
              <li>
                <a href="/returns" className="text-sm hover:underline">
                  Return & Refunds
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-sm hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* mettā muse Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">mettā muse</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/stores" className="text-sm hover:underline">
                  Stories
                </a>
              </li>
              <li>
                <a href="/artisans" className="text-sm hover:underline">
                  Artisans
                </a>
              </li>
              <li>
                <a href="/boutiques" className="text-sm hover:underline">
                  Boutiques
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/eu-compliance" className="text-sm hover:underline">
                  EU Compliances Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social and Payment Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Follow Us */}
            <div className="flex items-center gap-4">
              <span className="text-sm">FOLLOW US</span>
              <div className="flex gap-3">
                <a href="https://instagram.com" className="hover:text-gray-400">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" className="hover:text-gray-400">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <span className="text-sm">mettā muse ACCEPTS</span>
              <div className="flex gap-2">
                <img src={shopPay} alt="Shop Pay" className="h-8" />
                <img src={mastercard} alt="Mastercard" className="h-8" />
                <img src={paypal} alt="PayPal" className="h-8" />
                <img src={amex} alt="American Express" className="h-8" />
                <img src={applePay} alt="Apple Pay" className="h-8" />
                <img src={googlePay} alt="Google Pay" className="h-8" />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-400 mt-8">
            Copyright © 2023 mettamuse. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
