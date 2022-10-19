import logo from './logo.svg';
import Logo from "./img/acordelunar.png"
import './App.css';

function App() {
  return (
    <div className="App">
          <header>
            <picture>
                <img src={Logo}/>
            </picture>
            <section>
              <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Cadastro</li>
                <li>Endereço</li>
              </ul>
            </section>
          </header>
          <main>
          </main>
    </div>
  
  );
}

export default App;
