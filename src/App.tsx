import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Cart } from "./components/cart";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./pages/home";
import { CartContextProvider } from "./context/cartContext";

export const App = () => {
  return (
    <CartContextProvider>
      <GlobalStyle />
      <Header />
      <Home />
      <Cart />
      <Footer />
    </CartContextProvider>
  );
};
