import { useContext } from "react";
import Cart from "../../assets/cart.png";
import { CartContext } from "../../context/cartContext";
import { motion } from "framer-motion";
import * as S from "./styles";

export const Header = () => {
  const { cart, setIsCartVisible } = useContext(CartContext);

  return (
    <S.Header>
      <S.Nav as={motion.nav} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div>
          <h1>mks</h1>
          <span>sistemas</span>
        </div>
        <button onClick={() => setIsCartVisible(true)}>
          <img src={Cart} alt="cart icon" />
          <span>{cart.length}</span>
        </button>
      </S.Nav>
    </S.Header>
  );
};
