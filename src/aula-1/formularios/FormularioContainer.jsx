import React, { useState } from 'react';
import FileInputForm from './components/FileInputForm';
import NameForm from './components/NameForm';
import SorveteForm from './components/SorveteForm';

const FormularioContainer = () => {
    const paginas = {
        form1: 'Form 1',
        form2: 'Form 2',
        form3: 'Form 3'
    };

    const paginasArr = () => {
        let arr = [];
        for (let pagina in paginas) {
            arr.push(paginas[pagina]);
        }
        return arr;
    };

    const [state, setState] = useState({
        pagina: paginas.form1
    });

    const mudarPagina = (pagina) => {
        setState({ pagina: pagina });
    };

    const renderListaPaginas = () => {
        return paginasArr().map(pagina => <li>{renderBtnPagina(pagina)}</li>);
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
                {state.pagina === paginas.form1 && <NameForm />}
                {state.pagina === paginas.form2 && <SorveteForm />}
                {state.pagina === paginas.form3 && <FileInputForm />}
            </main>
        </div>
    );
};

export default FormularioContainer;