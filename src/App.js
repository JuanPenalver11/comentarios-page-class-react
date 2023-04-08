import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> <h1>Esta es la opinion de nuestros alumnos</h1>
        <Testimonio 
        imagen ="blond" 
        nombre="Anna Penalver" 
        pais="Guatepeor" 
        trabajo="Haciendo reír a la gente" 
        empresa="Risas.com" 
        testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
     sunt in culpa qui officia deserunt mollit anim id est laborum."/>

        <Testimonio 
        imagen ="brune" 
        nombre="Sergia Segura" 
        pais="Guatepeor" 
        trabajo="Basurera" 
        empresa="Napoles" 
        testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
     sunt in culpa qui officia deserunt mollit anim id est laborum."/>

        <Testimonio 
        imagen ="guy" 
        nombre="Enrique Sanchez" 
        pais="Guatepeor" 
        trabajo="Millonario" 
        empresa="Euromillon" 
        testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
     sunt in culpa qui officia deserunt mollit anim id est laborum."/>

      </div>



    </div>
  );
}

export default App;
