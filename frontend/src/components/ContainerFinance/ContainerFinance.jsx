import React, { useState } from "react";
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import ModalFinance from "../ModalFinance/ModalFinance";
import { Buttons, Line, Label, Balance, BalanceValue } from "./ContainerFinance.styled";
import { ScrollBox, DownRow } from "./ContainerFinance.styled";

const ContainerFinance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [financas, setFinancas] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const handleIncluirFinanca = (data) => {
    const valor = parseFloat(data.valor.replace(",", "."));
    const tipo = data.tipo;

    if (tipo === "saida") {
      data.valor = -Math.abs(valor);
    } else {
      data.valor = valor;
    }

    const updatedFinancas = [...financas];
    const index = updatedFinancas.findIndex((financa) => financa.nome === data.nome);

    if (index !== -1) {
      const oldValor = parseFloat(updatedFinancas[index].valor);
      updatedFinancas[index].valor = data.valor;
      setSaldo(saldo + parseFloat(data.valor) - oldValor);
    } else {
      updatedFinancas.push(data);
      setSaldo(saldo + parseFloat(data.valor));
    }

    setFinancas(updatedFinancas);
    handleCloseModal();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleValueChange = (event, index) => {
    const updatedFinancas = [...financas];
    const newValue = event.target.value.replace(",", ".");
  
    updatedFinancas[index].valor = newValue;
    setFinancas(updatedFinancas);
  
    const newSaldo = updatedFinancas.reduce(
      (acc, financa) => acc + parseFloat(financa.valor),
      0
    );
    setSaldo(newSaldo);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && event.target.value === "") {
      const updatedFinancas = [...financas];
      updatedFinancas.splice(index, 1); // Remove o item do array
      setFinancas(updatedFinancas);
  
      const newSaldo = updatedFinancas.reduce(
        (acc, financa) => acc + parseFloat(financa.valor),
        0
      );
      setSaldo(newSaldo);
    }
  };
  
  const styleInputValueEditable = {
    border: "none",
    backgroundColor: "#f2f2f2",
    width: "100%",
    fontSize: 20,
    fontWeight: 400,
    fontFamily: "Quicksand",
  }
  

  return (
    <Box
      id="WidgetBox"
      content={
        <>
          <RedBox>
            <Text id="big-title" text="Finanças" />
          </RedBox>
          <WhiteBox>
            <ScrollBox>
            {financas.map((financa, index) => (
          <Line key={index}>
          <Label contentEditable className="label-name">
            <Text id="little-text" text={financa.nome} />
          </Label>
          <Label contentEditable className="label-value">
            <input
              style={styleInputValueEditable}
              type="text"
              value={financa.valor}
              nChange={(event) => handleValueChange(event, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
          </Label>
          </Line>
            ))}
            </ScrollBox>
            <DownRow>
              <Balance>
                <Text id="little-text" text="Saldo:" />
              </Balance>
              <BalanceValue isNegative={saldo < 0}>{saldo.toFixed(2)}</BalanceValue>


              <Buttons>
                <Button plusButton id="pink-button" text="" textId="button-black-text" onClick={handleOpenModal} />
              </Buttons>
              {isModalOpen && <ModalFinance onClose={handleCloseModal} onIncluirFinanca={handleIncluirFinanca} />}
            </DownRow>
          </WhiteBox>
        </>
      }
    />
  );
};

export default ContainerFinance;
