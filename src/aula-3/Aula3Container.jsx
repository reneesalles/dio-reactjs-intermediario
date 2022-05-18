import React, { useState } from 'react';
import FetchComponent from './components/FetchComponent';
import FetchReduxComponent from './components/FetchReduxComponent';

const Aula3Container = () => {
    const paginas = {
        fetch: 'Fetch Básico',
        fetchRedux: 'Fetch Redux'
    };

    const paginasArr = () => {
        let arr = [];
        for (let pagina in paginas) {
            arr.push(paginas[pagina]);
        }
        return arr;
    };

    const [state, setState] = useState({
        pagina: paginas.fetch
    });

    const mudarPagina = (pagina) => {
        setState({ pagina: pagina });
    };

    const renderListaPaginas = () => {
        return paginasArr().map((pagina, index) => <li key={`fetch_${index}`}>{renderBtnPagina(pagina)}</li>);
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
                {state.pagina === paginas.fetch && <FetchComponent />}
                {state.pagina === paginas.fetchRedux && <FetchReduxComponent />}
            </main>
        </div>
    );
};

export default Aula3Container;