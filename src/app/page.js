"use client";
import {useState} from "react";

import Styles from "./page.module.css";
import Botoes from "@/app/components/Botoes";
import Display from "@/app/components/display";
import buttonStyles from "@/app/components/button.module.css";


export default function Home() {
    const [display, setDisplay] = useState('')

    function atualizarDisplay(numero) {
        setDisplay(display + numero)
    }

    function calcularResultado(){
        try {
            const expressao = display.replace(/÷/g, "/").replace(/×/g, "*"); // também pode incluir multiplicação
            setDisplay(eval(expressao).toString());

        } catch (error){
            console.log("A operação não pode ser concluida", error);
            return error
        }
    }

    function limparResultado(){
        setDisplay('')
    }

    function inverterSinal() {
        if (display) {
            if (display.startsWith("-")) {
                setDisplay(display.slice(1));
            } else {
                setDisplay("-" + display);
            }
        }
    }

    function porcentagem() {
        try {
            const resultado = eval(display.replace(/÷/g, "/").replace(/×/g, "*")) / 100;
            setDisplay(String(resultado));
        } catch (error) {
            setDisplay("Erro");
        }
    }

    function calcularRaiz() {
        try {
            const resultado = Math.sqrt(eval(display.replace(/÷/g, "/").replace(/×/g, "*")));
            setDisplay(String(resultado));
        } catch (error) {
            setDisplay("Erro");
        }
    }

  return (
      <div className={Styles.page}>
          <div className={Styles.calculator}>
            <h1 className={Styles.title}>Calculadora</h1>
              <Display valorDisplay={display} />
              <div className={Styles.buttons}>
                  <Botoes valor={"C"} onClick={limparResultado}>C</Botoes>
                  <Botoes valor={"±"} onClick={inverterSinal}>±</Botoes>
                  <Botoes valor={"%"} onClick={porcentagem}>%</Botoes>
                  <Botoes valor={"÷"} onClick={atualizarDisplay}>÷</Botoes>

                  <Botoes valor={7} onClick={atualizarDisplay}>7</Botoes>
                  <Botoes valor={8} onClick={atualizarDisplay}>8</Botoes>
                  <Botoes valor={9} onClick={atualizarDisplay}>9</Botoes>
                  <Botoes valor={"×"} onClick={atualizarDisplay} className={buttonStyles.red}>×</Botoes>

                  <Botoes valor={4} onClick={atualizarDisplay}>4</Botoes>
                  <Botoes valor={5} onClick={atualizarDisplay}>5</Botoes>
                  <Botoes valor={6} onClick={atualizarDisplay}>6</Botoes>
                  <Botoes valor={"-"} onClick={atualizarDisplay} className={buttonStyles.red}>-</Botoes>

                  <Botoes valor={1} onClick={atualizarDisplay}>1</Botoes>
                  <Botoes valor={2} onClick={atualizarDisplay}>2</Botoes>
                  <Botoes valor={3} onClick={atualizarDisplay}>3</Botoes>
                  <Botoes valor={"+"} onClick={atualizarDisplay} className={buttonStyles.red}>+</Botoes>

                  <Botoes valor={"√"} onClick={calcularRaiz}>√</Botoes>
                  <Botoes valor={0} onClick={atualizarDisplay}>0</Botoes>
                  <Botoes valor={"."} onClick={atualizarDisplay}>.</Botoes>
                  <Botoes valor={"="} onClick={calcularResultado} className={buttonStyles.equals}>=</Botoes>

              </div>
          </div>
      </div>
  );
}
