import { useAxiosQueryGet } from "../../hooks/useAxiosQuery";
import { Products } from "../../components/products";
import { ProductsData } from "../../types/apiProducts";
import { ModalError } from "../../components/modalError";
import { SkeletonComponent } from "../../components/skeleton";
import { ErrorProps } from "../../types/apiProducts";
import * as S from "./styles";

export const Home = () => {
  const { data, isLoading, error } = useAxiosQueryGet<ProductsData[]>(
    "products",
    "/products"
  );

  return (
    <S.Container>
      <ul>
        {isLoading && <SkeletonComponent />}
        {
          (error && (
            <ModalError error={error as ErrorProps} />
          )) as React.ReactNode
        }
        {data?.length &&
          data.map((product) => <Products key={product.id} data={product} />)}
      </ul>
    </S.Container>
  );
};
