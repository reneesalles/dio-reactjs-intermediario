import React from 'react';
import HooksComponent from './HooksComponent';
import StatefullComponent from './StatefullComponent';
import StatelessComponent from './StatelessComponent';

const EstadosContainer = () => {
    return (
        <div>
            <h3>Estados</h3>
            <StatefullComponent />
            <StatelessComponent items={[
                'Tomate',
                'Alface',
                'Melancia'
            ]} />
            <HooksComponent />
        </div>
    )
};

export default EstadosContainer;