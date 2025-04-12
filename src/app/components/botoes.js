"use client";
import Styles from "./button.module.css";


export default function Botoes(props) {
    return (
        <button className={`${Styles.button} ${props.className || ''}`}
                onClick={() => props.onClick(props.valor)} type="button">
            {props.valor}
        </button>
    )
}