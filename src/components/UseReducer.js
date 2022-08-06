import React, { useReducer } from "react";

const UseReducer = () => {
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });
    return (
        <div>
            {/* Uso mais básico do Reducer */}
            <h2>Use Reducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número</button>
        </div>
    );
};

export default UseReducer;
