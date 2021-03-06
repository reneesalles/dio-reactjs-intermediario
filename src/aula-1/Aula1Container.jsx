import React, { useState } from 'react';
import EstadosContainer from './estados/EstadosContainer';
import EstilizacaoContainer from './estilizacao/EstilizacaoContainer';
import FormularioContainer from './formularios/FormularioContainer';

const Aula1Container = () => {
    const paginas = {
        estilizacao: 'Estilização',
        estados: 'Estados',
        formularios: 'Formulários'
    };

    const paginasArr = () => {
        let arr = [];
        for (let pagina in paginas) {
            arr.push(paginas[pagina]);
        }
        return arr;
    };

    const [state, setState] = useState({
        pagina: paginas.estilizacao
    });

    const mudarPagina = (pagina) => {
        setState({ pagina: pagina });
    };

    const renderListaPaginas = () => {
        return paginasArr().map((pagina, index) => <li key={`aula_1_pagina_${index}`}>{renderBtnPagina(pagina)}</li>);
    };

    const renderBtnPagina = (pagina) => {
        return <button className={state.pagina === pagina ? 'active' : null} onClick={() => mudarPagina(pagina)}>{pagina}</button>
    };

    return (
        <div>
            <nav>
                <ul>
                    {renderListaPaginas()}
                </ul>
            </nav>
            <main>
                {state.pagina === paginas.estilizacao && <EstilizacaoContainer />}
                {state.pagina === paginas.estados && <EstadosContainer />}
                {state.pagina === paginas.formularios && <FormularioContainer />}
            </main>
        </div>
    );
};

export default Aula1Container;