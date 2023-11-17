import { formatNumber } from "../../helper/formatNumber";
import { ProductsData } from "../../types/apiProducts";
import { calculateTotalPrice } from "../../helper/calculateTotalPrice";
import * as S from "./styles";

type TypeProps = {
  data: ProductsData;
  handleRemoveCart: (id: number) => void;
  handleChangeQtd: (item: ProductsData, qtd: number) => void;
};

export const CartItem = ({
  data,
  handleRemoveCart,
  handleChangeQtd,
}: TypeProps) => {

  const totalPrice = calculateTotalPrice(Array(data));

  return (
    <S.CartProduct>
      <S.DeleteProduct onClick={() => handleRemoveCart(data.id)}>
        X
      </S.DeleteProduct>
      <img src={data.photo} alt={data.name} />
      <S.ProductName>{data.name}</S.ProductName>
      <S.QuantityCotainer>
        <span>Qtd:</span>
        <S.CountContainer>
          <button
            disabled={data.qtd === 1}
            onClick={() => handleChangeQtd(data, -1)}
          >
            -
          </button>
          <span>{data.qtd}</span>
          <button onClick={() => handleChangeQtd(data, 1)}>+</button>
        </S.CountContainer>
      </S.QuantityCotainer>
      <S.ProductPrice>{formatNumber(totalPrice)}</S.ProductPrice>
    </S.CartProduct>
  );
};
