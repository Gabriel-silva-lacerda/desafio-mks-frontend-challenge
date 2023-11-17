import { useAxiosQueryGet } from "../../hooks/useAxiosQuery";
import { Products } from "../../components/products";
import { DataProducts } from "../../types/apiProducts";
import { ModalError } from "../../components/modalError";
import { SkeletonComponent } from "../../components/skeleton";
import * as S from "./styles";

export const Home = () => {
  const { data, isLoading, error } = useAxiosQueryGet<DataProducts>(
    "products",
    "products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );

  return (
    <S.Container>
      <ul>
        {isLoading && <SkeletonComponent />}
        {(error && <ModalError />) as React.ReactNode}
        {data?.products.length &&
          data.products.map((product) => (
            <Products key={product.id} data={product} />
          ))}
      </ul>
    </S.Container>
  );
};
