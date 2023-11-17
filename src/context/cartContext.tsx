import { createContext, useEffect, useState } from "react";
import { ProductsData } from "../types/apiProducts";
type CartContextProps = {
  children: React.ReactNode;
};

type CartContext = {
  cart: ProductsData[];
  setCart: React.Dispatch<React.SetStateAction<ProductsData[]>>;
  isCartVisible: boolean;
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartContext = createContext<CartContext>({} as CartContext);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<ProductsData[]>(
    JSON.parse(localStorage.getItem("cartKey") || "[]")
  );
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartKey", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isCartVisible,
        setIsCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
