import React, { useState } from 'react';
import HooksComponent from './hooks/HooksComponent';
import StatefullComponent from './statefull/StatefullComponent';
import StatelessComponent from './stateless/StatelessComponent';

const EstadosContainer = () => {
    const estados = {
        statefull: 'Statefull',
        stateless: 'Stateless',
        hooks: 'Hooks'
    }

    const estadosArr = () => {
        let arr = [];
        for (let estado in estados) {
            arr.push(estados[estado]);
        }
        return arr;
    }

    const [state, setState] = useState({
        estado: estados.statefull
    });

    const mudarEstado = (estado) => {
        setState({ estado: estado });
    };

    const renderListaEstados = () => {
        return estadosArr().map(estado => <li>{renderBtnEstado(estado)}</li>);
    };

    const renderBtnEstado = (estado) => {
        return <button className={state.estado === estado ? 'active' : null} onClick={() => mudarEstado(estado)}>{estado}</button>
    };

    return (
        <div>
            <nav>
                <ul>
                    {renderListaEstados()}
                </ul>
            </nav>
            <main>
                {state.estado === estados.statefull && <StatefullComponent />}
                {state.estado === estados.stateless && <StatelessComponent items={['Tomate', 'Alface', 'Melancia']} />}
                {state.estado === estados.hooks && <HooksComponent />}
            </main>
        </div>
    )
};

export default EstadosContainer;