import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartItem } from "../cartItem";
import { formatNumber } from "../../helper/formatNumber";
import { ProductsData } from "../../types/apiProducts";
import { calculateTotalPrice } from "../../helper/calculateTotalPrice";
import * as S from "./styles";

export const Cart = () => {
  const { cart, setCart, isCartVisible, setIsCartVisible } =
    useContext(CartContext);
  const totalPrice = calculateTotalPrice(cart);

  const handleRemoveCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleChangeQtd = (item: ProductsData, qtd: number) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, qtd: cartItem.qtd + qtd }
        : cartItem
    );

    setCart(updatedCart);
  };

  return (
    <S.CartContainer
      style={
        isCartVisible
          ? { transform: "translate(0, 0)" }
          : { transform: "translate(110%, 0)" }
      }
    >
      <S.CartProductContainer>
        <S.TitleContainer>
          <h2>Carrinho de compras</h2>
          <button onClick={() => setIsCartVisible(false)}>X</button>
        </S.TitleContainer>
        {cart.map((cartProduct) => (
          <CartItem
            key={cartProduct.id}
            data={cartProduct}
            handleRemoveCart={handleRemoveCart}
            handleChangeQtd={handleChangeQtd}
          />
        ))}
      </S.CartProductContainer>

      <S.PriceContainer>
        <div>
          <span>Total:</span>
          <span>{formatNumber(totalPrice)}</span>
        </div>
        <button>Finalizar Compra</button>
      </S.PriceContainer>
    </S.CartContainer>
  );
};
