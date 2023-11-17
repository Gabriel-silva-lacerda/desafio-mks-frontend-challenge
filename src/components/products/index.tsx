import { useContext } from "react";
import { ProductsData } from "../../types/apiProducts";
import { CartContext } from "../../context/cartContext";
import { formatNumber } from "../../helper/formatNumber";
import Bag from "../../assets/shopping-bag.svg";
import { motion } from "framer-motion";
import * as S from "./styles";

export const Products = ({ data }: { data: ProductsData }) => {
  const { setCart } = useContext(CartContext);

  const addToCart = () => {
    const cartProduct = JSON.parse(localStorage.getItem("cartKey") || "[]");

    const itemIndex = cartProduct.findIndex(
      (item: ProductsData) => item.id === data.id
    );

    itemIndex === -1
      ? cartProduct.push({ ...data, qtd: 1 })
      : (cartProduct[itemIndex].qtd += 1);

    setCart(cartProduct);
  };

  return (
    <S.ProductList
      as={motion.li}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <S.PhotoContainer>
          <img src={data.photo} alt="" />
        </S.PhotoContainer>
        <S.ContainerDescription>
          <span>{data.name}</span>
          <span>{formatNumber(data.price)}</span>
        </S.ContainerDescription>
        <S.Description>{data.description}</S.Description>
      </div>
      <S.Button onClick={addToCart}>
        <img src={Bag} alt="shopping-bag icon" />
        Comprar
      </S.Button>
    </S.ProductList>
  );
};
