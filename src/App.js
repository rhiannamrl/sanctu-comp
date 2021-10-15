import { Link, Switch, Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import PokemonList from "./PokemonList"
import './App.css';

function App() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" alt={"pikachu"} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}></img>
        <Link className="home-button" to={{pathname: "/"} }><button>Home</button></Link>
      </div>
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/:pokemonName" component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;
