import './App.css';
import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';

export default function App() {
  return (
    <div className="App">
      <Topo />  
      <Conteudo />    
      <Rodape />
    </div>
  );
}


