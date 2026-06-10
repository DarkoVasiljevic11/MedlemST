import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<any[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART (FIXED SAFETY NORMALIZATION)
  const addToCart = (newItem: any) => {
    const normalizedItem = {
      ...newItem,

      //  ensure image always exists under ONE key
      image: newItem.image || newItem.imageUrl || newItem.img || "",

      // safety fallback for price/size
      price: newItem.price ?? 0,
      size: newItem.size ?? "default",
      quantity: newItem.quantity ?? 1,
    };

    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === normalizedItem.id &&
          item.size === normalizedItem.size
      );

      if (existing) {
        return prev.map((item) =>
          item.id === normalizedItem.id &&
          item.size === normalizedItem.size
            ? {
                ...item,
                quantity: item.quantity + normalizedItem.quantity,
              }
            : item
        );
      }

      return [...prev, normalizedItem];
    });
  };

  // REMOVE ONE ITEM
  const removeFromCart = (id: number | string, size?: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // CLEAR CART
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);