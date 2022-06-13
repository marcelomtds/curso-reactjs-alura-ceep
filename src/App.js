import { Component } from "react";
import "./assets/App.css";
import './assets/index.css';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import ListaDeNotas from "./components/ListaDeNotas";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} categorias={this.categorias} />
        </main>
        <ListaDeNotas apagarNota={this.notas.apagarNotas.bind(this.notas)} notas={this.notas} />
      </section >
    );
  };
}

export default App;
