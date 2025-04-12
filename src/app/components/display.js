"use client";
import '../globals.css';

export default function Display(props) {
    return (
        <div
            style={{
                overflowX: "auto",
                maxWidth: "100%",
            }}
            className="no-scrollbar"
        >
            <h1 className="no-scrollbar" style={{
                textAlign: "end",
                color: "black",
                padding: "16px",
                maxHeight: "100px",
                whiteSpace: "nowrap",
                overflowX: "auto",
                overflowY: "hidden"
            }}>
                {props.valorDisplay === '' ? 0 : props.valorDisplay}
            </h1>
        </div>
    );
}
