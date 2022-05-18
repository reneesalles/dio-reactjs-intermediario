import { useState } from 'react';
import './App.css';
import Aula1Container from './aula-1/Aula1Container';
import Aula2Container from './aula-2/Aula2Container';

function App() {
  const paginas = {
    aula1: 'Aula 1',
    aula2: 'Aula 2',
    aula3: 'Aula 3'
  };

  const paginasArr = () => {
    let arr = [];
    for (let pagina in paginas) {
      arr.push(paginas[pagina]);
    }
    return arr;
  };

  const [state, setState] = useState({
    pagina: paginas.aula1
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
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <nav>
        <ul>
          {renderListaPaginas()}
        </ul>
      </nav>
      <main>
        {state.pagina === paginas.aula1 && <Aula1Container />}
        {state.pagina === paginas.aula2 && <Aula2Container />}
        {state.pagina === paginas.aula3 && <div>TODO</div>}
      </main>
    </div>
  );
}

export default App;
