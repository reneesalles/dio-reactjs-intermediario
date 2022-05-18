import React, { useEffect, useState } from 'react';

const FetchComponent = () => {
    const [cientistas, setCientistas] = useState([]);

    useEffect(() => {
        fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
            .then(response => response.json())
            .then(data => setCientistas(data))
            .catch(error => alert(`Ops! Erro à seguir:\n${error}`));
    }, []);

    const renderCientista = (cientista, index) => {
        return (
            <li key={`cientista_${index}`}>
                <div><b>nome:</b> {cientista.name}</div>
                <div><b>área:</b> {cientista.area}</div>
            </li>
        );
    };

    return (
        <div>
            <h3>Cientistas Brasileiras</h3>
            <ul>
                {cientistas.map(renderCientista)}
            </ul>
        </div>
    );
};

export default FetchComponent;