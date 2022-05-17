import './App.css';
import ClassStyle from './estilizacao/classes/ClassStyle';
import CssInJsStyle from './estilizacao/cssInJs/CssInJsStyle';
import InlineStyle from './estilizacao/inline/InlineStyle';
import InlineStyle2 from './estilizacao/inline/InlineStyle2';

function App() {
  return (
    <div>
      <InlineStyle />
      <InlineStyle2 />
      <ClassStyle />
      <CssInJsStyle />
    </div>
  );
}

export default App;
