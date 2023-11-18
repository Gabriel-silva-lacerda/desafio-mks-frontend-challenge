import { useState } from "react";
import { motion } from "framer-motion";
import * as S from "./styles";
import { ErrorProps } from "../../types/apiProducts";

export const ModalError = ({ error }: { error: ErrorProps }) => {
  const [isOpen, setIsOpen] = useState(true);

  console.log(error);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <S.ModalError
      isOpen={isOpen}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <button onClick={closeModal}>X</button>
        <h2>Error: {error.response.status}</h2>
      </div>
    </S.ModalError>
  );
};
