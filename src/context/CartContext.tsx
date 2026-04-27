'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '@/data/courses';

interface CartContextType {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Course[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('infodesk_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('infodesk_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (course: Course) => {
    if (!cart.find(item => item.id === course.id)) {
      setCart([...cart, course]);
    }
  };

  const removeFromCart = (courseId: number) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
