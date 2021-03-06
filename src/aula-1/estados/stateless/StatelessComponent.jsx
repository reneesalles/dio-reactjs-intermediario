import React from 'react';

const StatelessComponent = ({ items }) => {
    return (
        <div>
            <p><b>Lista Stateless (function component)</b></p>
            <ul>
                {items.map((item, index) => <li key={`item_${index}`}>{item}</li>)}
            </ul>
        </div>
    );
};

export default StatelessComponent;