import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarBootstrap from './components/NavBarBootstrap';
import IndexProd from './components/IndexJXS/IndexProd'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBarBootstrap />
      <ItemListContainer greeting={'BIENVENIDOS!'}/>
      <IndexProd />
    </div>

  );
}

export default App;
