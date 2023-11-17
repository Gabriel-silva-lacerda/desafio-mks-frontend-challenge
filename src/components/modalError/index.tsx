import { useState } from "react";
import { motion } from "framer-motion";
import * as S from "./styles";

export const ModalError = () => {
  const [isOpen, setIsOpen] = useState(true);

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
        <h2>Erro ao realizar o fetch!</h2>
      </div>
    </S.ModalError>
  );
};
