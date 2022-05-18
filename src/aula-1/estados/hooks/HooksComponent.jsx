import React, { useState } from 'react';

const HooksComponent = () => {
    const [items, setItems] = useState([
        'Tomate',
        'Alface',
        'Melancia'
    ]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const removeItem = () => {
        setItems([...items.slice(0, -1)]);
    };

    return (
        <div>
            <p><b>Lista Hooks (function component com hooks)</b></p>
            <ul>
                {items.map((item, index) => <li key={`item_${index}`}>{item}</li>)}
            </ul>
            <button onClick={() => addItem('Batata')}>Adicionar Item</button>
            <button onClick={() => removeItem()}>Remover Item</button>
        </div>
    );
};

export default HooksComponent;